import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from '../../store/users/user.actions';
import { selectAllUsers, selectLoading } from '../../store/users/user.selector';
import {
  selectSelectedUser,
  selectOrdersOfSelectedUser,
  selectUserSummary,
} from '../../store/app.selectors';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  private store = inject(Store);

  users$ = this.store.select(selectAllUsers);
  loading$ = this.store.select(selectLoading);

  selectedUser$ = this.store.select(selectSelectedUser);
  selectedUserOrders$ = this.store.select(selectOrdersOfSelectedUser);
  userSummary$ = this.store.select(selectUserSummary);

  newUserName = '';
  editingUser: { id: number; name: string } | null = null;
  editingUserName = '';

  ngOnInit() {
    this.store.dispatch(UserActions.loadUsers());
  }

  addUser() {
    if (!this.newUserName.trim()) return;
    const newUser: User = {
      id: Math.floor(Math.random() * 1000),
      name: this.newUserName.trim(),
    };
    this.store.dispatch(UserActions.saveUser({ user: newUser }));
    this.newUserName = '';
  }

  editUser(user: User) {
    this.editingUser = { ...user };
    this.editingUserName = user.name;
  }

  updateUser() {
    if (!this.editingUser) return;
    const updatedUser: User = {
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

  deleteUser(id: number) {
    this.store.dispatch(UserActions.deleteUser({ id }));
  }

  selectUser(id: number) {
    this.store.dispatch(UserActions.selectUser({ id }));
  }
}
