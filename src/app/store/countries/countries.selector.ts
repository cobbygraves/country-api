import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryState } from '../../models/country';

export const countriesState = createFeatureSelector<CountryState>('countries');

export const countries = createSelector(
  countriesState,
  (state: CountryState) => state.countries
);

export const filteredCountries = createSelector(
  countriesState,
  (state: CountryState) => state.filteredCountries
);

export const loading = createSelector(
  countriesState,
  (state: CountryState) => state.loading
);

// export const error = createSelector(
//   countriesState,
//   (state: CountryState) => state.error
// );

export const country = createSelector(
  countriesState,
  (state: CountryState) => state.selectedCountry
);

export const filterRegion = createSelector(
  countriesState,
  (state) => state.filterRegion
);
