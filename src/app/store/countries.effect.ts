import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryService } from '../services/country.service';
import { catchError, map, switchMap, mergeMap } from 'rxjs';
import { loadCountries, loadCountriesSuccess } from './countries.actions';

@Injectable()
export class CountryEffects {
  private actions$ = inject(Actions);
  private countryService = inject(CountryService);

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountries),
      mergeMap(() =>
        this.countryService.getCountries().pipe(
          map((countries) => {
            // console.log('Countries loaded:', countries);
            return loadCountriesSuccess({ countries });
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
