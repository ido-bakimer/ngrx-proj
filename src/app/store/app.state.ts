import { UserState } from './users/user.state';
import { OrderState } from './orders/order.state';

export interface AppState {
  users: UserState;
  orders: OrderState;
}
