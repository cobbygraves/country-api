import { createReducer, on } from '@ngrx/store';
import {
  loadCountries,
  loadCountriesSuccess,
  loadSelectedCountrySuccess,
  loadFilterCountries,
  setFilterRegion,
} from './countries.actions';
import { CountryState } from '../../models/country';
import { setSearchQuery } from '../user/user.actions';

const initialState: CountryState = {
  countries: [],
  selectedCountry: null,
  filteredCountries: [],
  loading: false,
  filterRegion: '',
  error: null,
};

export const countryReducer = createReducer(
  initialState,
  on(loadCountries, (state) => ({ ...state, loading: true })),
  on(loadSelectedCountrySuccess, (state, { country }) => ({
    ...state,
    selectedCountry: country,
    loading: false,
  })),
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

  on(setSearchQuery, (state, { query }) => ({
    ...state,
    filteredCountries: state.countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    ),
  })),

  on(setFilterRegion, (state, { region }) => ({
    ...state,
    filterRegion: region,
    filteredCountries: region
      ? state.countries.filter((country) => country.region === region)
      : state.countries,
  }))
  // on(loadCountry, (state) => {
  //   return {
  //     ...state,
  //     loading: true,
  //   };
  // })
);
