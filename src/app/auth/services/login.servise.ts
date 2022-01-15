import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class LoginServise {
  constructor(private http: HttpClient) {}

  public login(data: Object) {
    return this.http
      .post('http://localhost:1994/api/users/login', data, options)
      .subscribe({
        next: (data) => {
          this.setUser(data);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  private setUser(data: any) {
    localStorage.setItem('id_token', data.token);
  }
}
