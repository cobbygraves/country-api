import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryState } from '../../models/country';

export const selectCountriesState =
  createFeatureSelector<CountryState>('countries');

export const selectCountries = createSelector(
  selectCountriesState,
  (state: CountryState) => state.countries
);

export const selectLoading = createSelector(
  selectCountriesState,
  (state: CountryState) => state.loading
);
