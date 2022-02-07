import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor(private snackBar: MatSnackBar) {}

  authorized: BehaviorSubject<string | null> = new BehaviorSubject(
    localStorage.getItem('user_name')
  );

  public setInfo(token: string, username: string) {
    if (token && username) {
      localStorage.setItem('id_token', token);
      localStorage.setItem('user_name', username);
      localStorage.setItem('id', JSON.parse(atob(token.split('.')[1]))._id);
      this.authorized.next(username);
    } else {
      this.snackBar.open(
        'Something wrong, check your data and repeat the login!!',
        'Ok.',
        {
          duration: 5000,
        }
      );
    }
  }

  isAuthenticated(): Observable<string | null> {
    return this.authorized.asObservable();
  }

  public cleanInfo() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user_name');
    localStorage.removeItem('id');
    this.authorized.next(null);
  }
}
