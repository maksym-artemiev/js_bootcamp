import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogService } from 'src/app/shared/services/login-service';

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class LoginServise {
  constructor(private http: HttpClient, private log: LogService) {}

  public login(data: Object) {
    return this.http
      .post('http://localhost:1994/api/users/login', data, options)
      .subscribe({
        next: (data: any) => {
          this.log.setInfo(data.token, data.username);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
