import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  authorized: BehaviorSubject<string|null> = new BehaviorSubject(localStorage.getItem('user_name'));

  public setInfo(token: string, username: string) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user_name', username);
    this.authorized.next(username);
  }

  isAuthenticated(): Observable<string|null> {
    return this.authorized.asObservable();
  }

  public cleanInfo() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user_name');
    this.authorized.next(null);
  }
}
