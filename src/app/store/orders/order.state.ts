import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Order } from './order.model';

export interface OrderState extends EntityState<Order> {}

export const orderAdapter = createEntityAdapter<Order>();

export const initialOrderState: OrderState = orderAdapter.getInitialState();
