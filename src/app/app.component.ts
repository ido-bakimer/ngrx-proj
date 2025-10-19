import { Component } from '@angular/core';
import { UserListComponent } from './components/user-list.component/user-list.component';
import { UserOrdersComponent } from './components/users-orders/user-orders.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent, UserOrdersComponent],
  template: `
    <h1>Ngrx Users App</h1>
    <app-user-list></app-user-list>
    <app-user-orders></app-user-orders>
  `,
})
export class AppComponent {}
