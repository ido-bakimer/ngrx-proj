// user.actions.ts
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../services/user.service';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load Users': emptyProps(),
    'Load Users Success': props<{ users: User[] }>(),
    'Load Users Failure': props<{ error: string }>(),
  },
});
