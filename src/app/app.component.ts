import { Component } from '@angular/core';
import { UserListComponent } from './components/user-list.component/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent],
  template: `
    <h1>Ngrx Users App</h1>
    <app-user-list></app-user-list>
  `,
})
export class AppComponent {}
