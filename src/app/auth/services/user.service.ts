import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../components/user/user.interface';

const options = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})

export class UserService {
  user!: User;
  private userDataStream = new BehaviorSubject<User>(this.user);
  constructor(private http: HttpClient) {}


  public getUser(): Observable<User> {
    return this.http.get<any>('http://localhost:1994/api/users/profile');
  }

  public getUserData(): Observable<User> {
    return this.userDataStream.asObservable();
  }

  public update(data: Object) {
    return this.http
      .patch('http://localhost:1994/api/users', data, options)
      .subscribe({
        next: (data) => {},
        error: (error) => {
          console.log(error);
        },
      });
  }
  // public updateUserData(user: User) {
  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });
  //   let options = { headers: headers };
  //   return this.http
  //     .post<any>('http://localhost:1994/api/users', user, options)
  //     .subscribe(
  //       (res) => {
  //         res;
  //         this.getUserData();
  //       },
  //       (err) => {
  //         console.log(err.message);
  //       }
  //     );
  // }
}
