import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  public registration(data: Object) {
    return this.http
      .post('http://localhost:1994/api/users', data, options)
      .subscribe({
        next: (data) => {},
        error: (error) => {
          console.log(error);
        },
      });
  }
}
