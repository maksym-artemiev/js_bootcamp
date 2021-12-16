import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Post } from '../components/posts/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = [];
  private postDataStream = new BehaviorSubject<Post[]>(this.posts);

  constructor(private http: HttpClient) {
    this.http.get<any>('http://localhost:1994/api/posts').subscribe((data) => {
      console.log(data);
      this.postDataStream.next(data.mockedPosts);
    });
  }

  public updatePostData(post: Post): void {
    this.postDataStream.next([post, ...this.postDataStream.getValue()]);
  }

  public getPostData(): Observable<Post[]> {
    return this.postDataStream.asObservable();
  }
}
