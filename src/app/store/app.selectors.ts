import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { userAdapter } from './users/user.state';
import { orderAdapter } from './orders/order.state';

export const selectUserState = createFeatureSelector<AppState, AppState['users']>('users');
export const selectOrderState = createFeatureSelector<AppState, AppState['orders']>('orders');

const {
  selectEntities: selectUserEntities,
} = userAdapter.getSelectors(selectUserState);

const {
  selectAll: selectAllOrders
} = orderAdapter.getSelectors(selectOrderState);

// user selections
export const selectSelectedUserId = createSelector(
  selectUserState,
  (state) => state.selectedUserId
);

export const selectSelectedUser = createSelector(
  selectUserEntities,
  selectSelectedUserId,
  (entities, selectedId) => (selectedId ? entities[selectedId] ?? null : null)
);

// order of selected user
export const selectOrdersOfSelectedUser = createSelector(
  selectAllOrders,
  selectSelectedUserId,
  (orders, userId) => orders.filter((o) => o.userId === userId)
);

// total
export const selectUserSummary = createSelector(
  selectSelectedUser,
  selectOrdersOfSelectedUser,
  (user, orders) => {
    if (!user) return null;
    const total = orders.reduce((sum, o) => sum + o.total, 0);
    return { userName: user.name, total };
  }
);
