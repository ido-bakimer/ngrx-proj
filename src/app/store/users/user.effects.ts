import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { UserActions } from './user.actions';
import { selectSelectedUserId } from './user.selector';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  private store = inject(Store);
  private actions$ = inject(Actions);

  private userService = inject(UserService);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map((users) => UserActions.loadUsersSuccess({ users })),
          catchError((err) =>
            of(UserActions.loadUsersFailure({ error: err.message }))
          )
        )
      )
    )
  );

  loadSelectedUser$ = createEffect(
    () =>
      this.store.select(selectSelectedUserId).pipe(
        switchMap((id) => {
          if (id === null) return [];
          return this.userService
            .getUserDetails(id)
            .pipe(map((user) => UserActions.updateUser({ user })));
        })
      ),
    { dispatch: true }
  );
}
