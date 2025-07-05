import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryService } from '../../services/country.service';
import { catchError, map, switchMap, mergeMap } from 'rxjs';
import {
  loadCountries,
  loadCountriesSuccess,
  loadCountryByCode,
  loadSelectedCountrySuccess,
} from './countries.actions';
// import { ActivatedRoute } from '@angular/router';
// import { Country } from '../../models/country';

@Injectable()
export class CountryEffects {
  private actions$ = inject(Actions);
  private countryService = inject(CountryService);
  // private route = inject(ActivatedRoute);

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountries),
      switchMap(() =>
        this.countryService.getCountries().pipe(
          map((countries) => loadCountriesSuccess({ countries })),
          catchError((error) => {
            console.error('Error loading countries:', error);
            return [];
          })
        )
      )
    )
  );

  loadSelectedCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountryByCode),
      mergeMap((action) =>
        this.countryService.getCountryByCode(action.id).pipe(
          map((country) => {
            // console.log(country);
            return loadSelectedCountrySuccess({ country: country[0] });
          }),
          catchError((error) => {
            console.error('Error loading countries:', error);
            return [];
          })
        )
      )
    )
  );
}
