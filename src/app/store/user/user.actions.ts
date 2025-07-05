import { createAction, props } from '@ngrx/store';

export const setSearchQuery = createAction(
  '[User] Search Country',
  props<{ query: string }>()
);
