import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  newComment = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  public addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(
      'http://localhost:1994/api/comments/',
      comment
    );
  }

  public updateComment(comment: Comment): Observable<Comment> {
    return this.http.patch<Comment>(
      `http://localhost:1994/api/comments/${comment._id}`,
      comment
    );
  }

  public deleteComment(id: string | null): Observable<any> {
    return this.http.delete<Comment>(
      `http://localhost:1994/api/comments/${id}`
    );
  }

  public getComments(id: string | null): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      `http://localhost:1994/api/comments?postId=${id}`
    );
  }

  public getComment(id: string | null): Observable<Comment> {
    return this.http.get<Comment>(`http://localhost:1994/api/comments/${id}`);
  }
}
