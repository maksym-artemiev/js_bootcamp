import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  authorized: BehaviorSubject<any> = new BehaviorSubject({
    token: localStorage.getItem('id_token'),
    username: localStorage.getItem('user_name'),
  });

  public setInfo(token: string, username: string) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user_name', username);
    this.authorized.next({ token, username });
  }

  public cleanInfo() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user_name');
    this.authorized.next(null);
  }
}
