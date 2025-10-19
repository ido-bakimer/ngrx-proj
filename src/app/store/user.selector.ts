import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userAdapter, UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('users');

// get selectors
const { selectAll, selectEntities, selectIds, selectTotal } =
  userAdapter.getSelectors(selectUserState);

export const selectAllUsers = selectAll;
export const selectUserEntities = selectEntities;
export const selectUserIds = selectIds;
export const selectUserTotal = selectTotal;

// if non entity
export const selectLoading = createSelector(
  selectUserState,
  (state) => state.loading
);
export const selectError = createSelector(
  selectUserState,
  (state) => state.error
);
