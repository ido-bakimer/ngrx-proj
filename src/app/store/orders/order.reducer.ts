import { createReducer } from '@ngrx/store';
import { initialOrderState, orderAdapter } from './order.state';
import { mockOrders } from './mock-orders';

export const orderReducer = createReducer(
  orderAdapter.setAll(mockOrders, initialOrderState)
);
