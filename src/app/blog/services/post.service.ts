import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Post } from '../components/posts/post.interface';

const posts: Post[] = [
  {
    name: 'John Dow',
    title: 'NATURAL LANGUAGE INTERFACE ACCESSIBILITY',
    about: 'Spoken interaction with mobile devices and consumer',
    like: 0,
  },
  {
    name: 'John Dow',
    title: 'Accessibility of Remote Meetings',
    about: 'The impact of COVID-19 has seen a substantial increase',
    like: 0,
  },
];

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postDataStream = new BehaviorSubject<Post[]>(posts);
  constructor() {}

  public updatePostData(post: Post): void {
    this.postDataStream.next([post, ...this.postDataStream.getValue()]);
  }

  public getPostData(): Observable<Post[]> {
    return this.postDataStream.asObservable();
  }
}
