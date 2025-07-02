import { createReducer, on } from '@ngrx/store';
import {
  loadCountries,
  loadCountriesSuccess,
  loadCountrySuccess,
  loadCountry,
} from './countries.actions';
import { CountryState } from '../../models/country';

const initialState: CountryState = {
  countries: [],
  loading: false,
  // error: null
};

export const countryReducer = createReducer(
  initialState,
  on(loadCountries, (state) => ({ ...state, loading: true })),
  on(loadCountriesSuccess, (state, { countries }) => {
    // console.log('Countries loaded:', countries);
    return {
      ...state,
      countries,
      loading: false,
    };
  }),
  // on(loadCountry, (state) => {
  //   return {
  //     ...state,
  //     loading: true,
  //   };
  // }),
  on(loadCountrySuccess, (state, { country }) => {
    return {
      ...state,
      country,
      loading: false,
    };
  })
);
