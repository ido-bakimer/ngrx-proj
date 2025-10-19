import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '../../services/user.service';

export interface UserState extends EntityState<User> {
  loading: boolean;
  error: string | null;
  selectedUserId: number | null;
}

// Create adapter
export const userAdapter = createEntityAdapter<User>();

// Initial state
export const initialUserState: UserState = userAdapter.getInitialState({
  loading: false,
  error: null,
  selectedUserId: null,
});
