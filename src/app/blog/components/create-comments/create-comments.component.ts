import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormErrors } from '../../interfaces/create-comment-errors-interface';
import { CommentService } from '../../services/comments.service';
import { Comment } from '../../interfaces/comment.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-comments',
  templateUrl: './create-comments.component.html',
  styleUrls: ['./create-comments.component.less'],
})
export class CreateCommentsComponent implements OnInit, OnDestroy {
  commentList!: Subscription;
  form!: FormGroup;
  errors: FormErrors = {
    required: 'You must enter a value',
    minlength: 'Write your fealings* Min. 5 symbols',
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      textMessage: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  isFormInvalid(formControl: string): boolean {
    return this.form.get(formControl)?.status == 'INVALID';
  }

  getErrorMessage(control: any) {
    if (!this.form?.controls[control].touched) {
      return '';
    }
    const er = Object.keys(this.errors).find((e) =>
      this.form.controls[control].hasError(e)
    );
    return er ? this.errors[er as keyof FormErrors] : '';
  }

  onSubmit(e: Event) {
    let comment: Comment = this.form.value;
    comment.postId = this.activatedRoute.snapshot.params['id'];
    this.commentService.addComment(comment).subscribe(() => {
      this.commentService.getComments(comment.postId);
    });
    this.commentService.newComment.emit();
    this.form.reset();
    this.snackBar.open(
      'Thanks you for interesting to the article! Look at your comment in list above!',
      'Ok',
      {
        duration: 2000,
      }
    );
  }

  ngOnDestroy(): void {
    if (this.commentList) {
      this.commentList.unsubscribe();
    }
  }
}
