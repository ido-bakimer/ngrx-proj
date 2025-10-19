import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
  [x: string]: any;
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  getUsers() {
    const mockUsers: User[] = [
      { id: 1, name: 'avi' },
      { id: 2, name: 'beni' },
      { id: 3, name: 'gabi' },
    ];
    // simulate backend being backend
    return of(mockUsers).pipe(delay(700)); 
  }

   getUserDetails(id: number): Observable<User> {
    const details: Record<number, string> = {
      1: 'avi is the best',
      2: 'beni likes avi',
      3: 'gabi likes kabab',
    };
    return of({ id, name: `User ${id}`, details: details[id] }).pipe(delay(1000));
  }
}