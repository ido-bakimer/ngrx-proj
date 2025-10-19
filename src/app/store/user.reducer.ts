import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { UserActions } from './user.actions';
import { User } from '../services/user.service';

export const userAdapter = createEntityAdapter<User>({
  selectId: (user) => user.id, 
});

export interface UserState extends EntityState<User> {
  loading: boolean;
  error?: string;
}

export const initialState: UserState = userAdapter.getInitialState({
  loading: false,
  error: undefined,
});

export const userReducer = createReducer(
  initialState,

  // start loading
  on(UserActions.loadUsers, (state) => ({
    ...state,
    loading: true,
    error: undefined,
  })),

  // when success - set all users
  on(UserActions.loadUsersSuccess, (state, { users }) =>
    userAdapter.setAll(users, { ...state, loading: false })
  ),

  // failure
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
