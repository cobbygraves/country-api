import { createReducer, on } from '@ngrx/store';
// import { toggleTheme } from './theme.actions';
import { setSearchQuery } from './user.actions';
import { UserState } from '../../models/user';

const initialState: UserState = {
  searchQuery: '',
};

export const UserReducer = createReducer(
  initialState,
  on(setSearchQuery, (state, { query }) => ({ ...state, searchQuery: query }))
);
