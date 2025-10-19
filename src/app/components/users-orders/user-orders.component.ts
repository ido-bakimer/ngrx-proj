import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserActions } from '../../store/users/user.actions';
import { selectUserSummary } from '../../store/app.selectors';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-orders.component.html',
})
export class UserOrdersComponent {
  private store = inject(Store);

  summary$ = this.store.select(selectUserSummary);

  // Example: buttons to switch users
  selectUser(id: number) {
    this.store.dispatch(UserActions.selectUser({ id }));
  }
}
