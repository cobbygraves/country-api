import { createReducer, on } from '@ngrx/store';
import {
  loadCountries,
  loadCountriesSuccess,
  loadCountrySuccess,
  loadCountry,
  loadFilterCountries,
} from './countries.actions';
import { CountryState } from '../../models/country';
import { searchCountry } from '../user/user.actions';

const initialState: CountryState = {
  countries: [],
  filteredCountries: [],
  loading: false,
  // error: null
};

export const countryReducer = createReducer(
  initialState,
  on(loadCountries, (state) => ({ ...state, loading: true })),
  on(loadCountriesSuccess, (state, { countries }) => {
    return {
      ...state,
      countries,
      filteredCountries: countries,
      loading: false,
    };
  }),
  on(loadFilterCountries, (state, { countries }) => {
    return {
      ...state,
      filteredCountries: countries,
    };
  }),

  on(searchCountry, (state, { query }) => ({
    ...state,
    filteredCountries: state.countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    ),
  }))
  // on(loadCountry, (state) => {
  //   return {
  //     ...state,
  //     loading: true,
  //   };
  // })
);
