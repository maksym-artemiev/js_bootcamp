import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Post } from '../components/posts/post.interface';

const options = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' }),
};

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

  public getPostById(id: string | null): Observable<Post> {
    return this.http.get<Post>(`http://localhost:1994/api/posts/${id}`);
  }

  public deletePostById(id: string | null): Observable<Post> {
    return this.http.delete<Post>(`http://localhost:1994/api/posts/${id}`);
  }

  public updateSelectedPost(data: Post, id: string | null) {
    return this.http
      .patch(`http://localhost:1994/api/posts/${id}`, data, options)
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
      });
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

  public like(id: string): Observable<Post> {
    return this.http.patch<Post>(`http://localhost:1994/api/posts/like/${id}`, {
      id: id,
    });
  }
}
