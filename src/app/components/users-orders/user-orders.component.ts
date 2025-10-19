import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { UserActions } from '../../store/users/user.actions';
import {
  selectSelectedUserId,
  selectUserSummary,
} from '../../store/app.selectors';
import { CommonModule } from '@angular/common';
import { UserNameComponent } from './user-name.component';
import { UserTotalComponent } from './user-total.component';
import { selectAllUsers } from '../../store/users/user.selector';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-user-orders',
  standalone: true,
  imports: [CommonModule, UserNameComponent, UserTotalComponent],
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss'],
})
export class UserOrdersComponent {
  private store = inject(Store);

  summary$ = this.store.select(selectUserSummary);

  summaryWithDetails$ = combineLatest([
    this.store.select(selectAllUsers),
    this.store.select(selectSelectedUserId),
  ]).pipe(
    map(([users, selectedUserId]) => {
      if (selectedUserId === null) return null;
      return users.find((u) => u.id === selectedUserId) || null;
    })
  );

  selectUser(id: number) {
    this.store.dispatch(UserActions.selectUser({ id }));
  }
}
