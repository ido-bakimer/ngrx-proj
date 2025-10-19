import { createReducer } from '@ngrx/store';
import { initialOrderState } from './order.state';

export const orderReducer = createReducer(initialOrderState);
