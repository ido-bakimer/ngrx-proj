import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../../services/user.service';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load Users': emptyProps(),
    'Load Users Success': props<{ users: User[] }>(),
    'Load Users Failure': props<{ error: string }>(),

    'Add User': props<{ user: User }>(),
    'Update User': props<{ user: User }>(),
    'Delete User': props<{ id: number }>(),
    'Save User': props<{ user: User }>(),
    'Select User': props<{ id: number }>(),
  },
});
