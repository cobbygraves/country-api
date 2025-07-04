import { createAction, props } from '@ngrx/store';
import { Country } from '../../models/country';

export const loadCountries = createAction('[Countries API] Load Countries');
export const loadFilterCountries = createAction(
  '[Countries API] Filter Countries',
  props<{ countries: Country[] }>()
);
export const loadCountriesSuccess = createAction(
  '[Countries API] Load Countries Success',
  props<{ countries: Country[] }>()
);
export const loadSelectedCountrySuccess = createAction(
  '[Countries API] Load Country Success',
  props<{ country: Country }>()
);
export const loadCountryByCode = createAction(
  '[Countries API] Load Country',
  props<{ id: string }>()
);
export const setFilterRegion = createAction(
  '[Countries API] Set Selected Region',
  props<{ region: string }>()
);
