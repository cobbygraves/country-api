import { createAction, props } from '@ngrx/store';
import { Country } from '../../models/country';

export const loadCountries = createAction('[Countries API] Load Countries');
export const loadCountriesSuccess = createAction(
  '[Countries API] Load Countries Success',
  props<{ countries: Country[] }>()
);
