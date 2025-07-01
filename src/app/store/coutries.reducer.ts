import { createReducer, on } from '@ngrx/store';
import { loadCountries, loadCountriesSuccess } from './countries.actions';
import { CountryState } from '../models/country';

const initialState: CountryState = {
  countries: [],
  loading: false,
  // error: null
};

export const countryReducer = createReducer(
  initialState,
  on(loadCountries, (state) => ({ ...state, loading: true })),
  on(loadCountriesSuccess, (state, { countries }) => ({
    ...state,
    countries,
    loading: false,
  }))
);
