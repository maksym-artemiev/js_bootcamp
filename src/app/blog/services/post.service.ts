import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Post } from '../components/posts/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = [];
  private postDataStream = new BehaviorSubject<Post[]>(this.posts);

  constructor(private http: HttpClient) {}

  public getDataFromServer(): Observable<Post[]> {
    return this.http.get<any>('http://localhost:1994/api/posts');
  }

  public getPostData(): Observable<Post[]> {
    return this.postDataStream.asObservable();
  }

  public updatePostData(post: Post) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };
    return this.http
      .post<any>('http://localhost:1994/api/posts', post, options)
      .subscribe(
        (res) => {
          res;
          this.getPostData();
        },
        (err) => {
          console.log(err.message);
        }
      );
  }
}
