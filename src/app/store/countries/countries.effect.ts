import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryService } from '../../services/country.service';
import { catchError, map, switchMap } from 'rxjs';
import {
  loadCountries,
  loadCountriesSuccess,
  loadCountry,
  loadCountrySuccess,
} from './countries.actions';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class CountryEffects {
  private actions$ = inject(Actions);
  private countryService = inject(CountryService);
  private route = inject(ActivatedRoute);

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

  loadCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountry),
      switchMap((action) =>
        this.countryService.getCountryByCode(action.id).pipe(
          map((country) => loadCountrySuccess({ country })),
          catchError((error) => {
            console.error('Error loading countries:', error);
            return [];
          })
        )
      )
    )
  );
}
