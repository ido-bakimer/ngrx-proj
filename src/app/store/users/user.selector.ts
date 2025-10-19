import { createFeatureSelector } from '@ngrx/store';
import { userAdapter, UserState } from './user.state';

export const selectUserState = createFeatureSelector<UserState>('users');

const { selectAll, selectEntities, selectIds, selectTotal } =
  userAdapter.getSelectors(selectUserState);

export const selectAllUsers = selectAll;
export const selectUserEntities = selectEntities;
export const selectLoading = (state: UserState) => state.loading;
export const selectSelectedUserId = (state: UserState) => state.selectedUserId;
