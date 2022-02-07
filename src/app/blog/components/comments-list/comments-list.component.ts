import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommentService } from '../../services/comments.service';
import { Comment } from '../../interfaces/comment.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.less'],
})
export class CommentsListComponent implements OnInit, OnDestroy {
  comments!: Comment[];
  postId!: string;
  commentsList!: Subscription;
  isAuthor = localStorage.getItem('user_name');

  constructor(
    private commentsService: CommentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.commentsService.newComment.subscribe(() => {
      this.getComments();
    });
  }

  public getComments(): void {
    this.postId = this.activatedRoute.snapshot.params['id'];
    this.commentsList = this.commentsService
      .getComments(this.postId)
      .subscribe((comments: Comment[]) => {
        this.comments = comments;
      });
  }

  onPageRoute(id = ''): void {
    this.router.navigate([`edit-comment/${id}`]);
  }

  ngOnInit(): void {
    this.getComments();
  }

  deleteComment(id = ''): void {
    this.snackBar.open('You delete your comment.', 'Ok', {
      duration: 4000,
    });
    this.commentsService.deleteComment(id).subscribe();
    this.commentsService.newComment.emit();
  }

  ngOnDestroy(): void {
    if (this.commentsList) this.commentsList.unsubscribe();
  }
}
