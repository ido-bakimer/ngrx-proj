import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
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
}