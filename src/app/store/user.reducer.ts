import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { User } from '../services/user.service';

export interface UserState {
  users: User[];
  loading: boolean;
  error?: string;
}

export const initialState: UserState = {
  users: [],
  loading: false,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => ({ ...state, loading: true })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
