import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { userReducer } from './app/store/users/user.reducer';
import { orderReducer } from './app/store/orders/order.reducer';
import { UserEffects } from './app/store/users/user.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({
      users: userReducer,
      orders: orderReducer,
    }),
    provideEffects([UserEffects]),
  ],
});
