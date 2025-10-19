import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from '../store/user.actions';
import { selectAllUsers, selectLoading } from '../store/user.selector';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html', // or inline template as above
})
export class UserListComponent {
  private store = inject(Store);

  users$ = this.store.select(selectAllUsers);
  loading$ = this.store.select(selectLoading);

  // For adding new user
  newUserName = '';

  // For editing existing user
  editingUser: { id: number; name: string } | null = null;
  editingUserName = '';

  ngOnInit() {
    this.store.dispatch(UserActions.loadUsers());
  }

  addUser() {
    if (!this.newUserName.trim()) return;
    const newUser = {
      id: Math.floor(Math.random() * 1000), 
      name: this.newUserName.trim(),
    };
    this.store.dispatch(UserActions.saveUser({ user: newUser }));
    this.newUserName = '';
  }

  editUser(user: { id: number; name: string }) {
    this.editingUser = { ...user };
    this.editingUserName = user.name;
  }

  updateUser() {
    if (!this.editingUser) return;
    const updatedUser = {
      id: this.editingUser.id,
      name: this.editingUserName.trim(),
    };
    this.store.dispatch(UserActions.saveUser({ user: updatedUser }));
    this.cancelEdit();
  }

  cancelEdit() {
    this.editingUser = null;
    this.editingUserName = '';
  }

  // Delete a user
  deleteUser(id: number) {
    this.store.dispatch(UserActions.deleteUser({ id }));
  }
}
