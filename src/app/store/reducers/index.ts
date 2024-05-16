import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { usersReducer } from './users.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  users: usersReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
