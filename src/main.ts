import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AppComponent } from './app/app.component';
import { userReducer } from './app/store/users/user.reducer';
import { UserEffects } from './app/store/users/user.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ users: userReducer }),
    provideEffects([UserEffects]),
  ],
});
