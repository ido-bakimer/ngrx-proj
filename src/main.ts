// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AppComponent } from './app/app.component';
import { userReducer } from './app/store/user.reducer';
import { UserEffects } from './app/store/user.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ users: userReducer }),
    provideEffects([UserEffects]),
  ],
});
