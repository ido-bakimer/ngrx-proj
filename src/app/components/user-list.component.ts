import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from '../store/user.actions';
import { selectUsers, selectLoading } from '../store/user.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="loading$ | async">Loading users...</div>
    <ul>
      <li *ngFor="let user of users$ | async">{{ user.name }}</li>
    </ul>
  `,
})
export class UserListComponent {
  private store = inject(Store);
  users$ = this.store.select(selectUsers);
  loading$ = this.store.select(selectLoading);

  ngOnInit() {
    this.store.dispatch(UserActions.loadUsers());
  }
}
