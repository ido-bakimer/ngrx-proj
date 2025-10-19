import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { userAdapter, initialUserState } from './user.state';

export const userReducer = createReducer(
  initialUserState,

  on(UserActions.loadUsers, (state) => ({ ...state, loading: true })),
  on(UserActions.loadUsersSuccess, (state, { users }) =>
    userAdapter.setAll(users, { ...state, loading: false })
  ),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(UserActions.saveUser, (state, { user }) => {
    const exists = state.entities[user.id];
    return exists
      ? userAdapter.updateOne({ id: user.id, changes: user }, state)
      : userAdapter.addOne(user, state);
  }),

  on(UserActions.deleteUser, (state, { id }) => userAdapter.removeOne(id, state)) ,

  on(UserActions.selectUser, (state, { id }) => ({
  ...state,
  selectedUserId: id
})),
);
