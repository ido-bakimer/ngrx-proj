import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserActions } from '../../store/users/user.actions';
import { selectUserSummary } from '../../store/app.selectors';
import { CommonModule } from '@angular/common';
import { UserNameComponent } from './user-name.component';
import { UserTotalComponent } from './user-total.component';

@Component({
  selector: 'app-user-orders',
  standalone: true,
  imports: [CommonModule, UserNameComponent, UserTotalComponent],
  templateUrl: './user-orders.component.html',
})
export class UserOrdersComponent {
  private store = inject(Store);

  summary$ = this.store.select(selectUserSummary);

  selectUser(id: number) {
    this.store.dispatch(UserActions.selectUser({ id }));
  }
}
