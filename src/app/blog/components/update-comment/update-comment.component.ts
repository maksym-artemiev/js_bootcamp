import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormErrors } from '../../interfaces/create-comment-errors-interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Comment } from '../../interfaces/comment.interface';
import { CommentService } from '../../services/comments.service';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.less'],
})
export class UpdateCommentComponent implements OnInit {
  comment!: Comment;
  form!: FormGroup;
  errors: FormErrors = {
    required: 'You must enter a value',
    minlength: 'Write your fealings* Min. 5 symbols',
  };

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commentService: CommentService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getComment();
    this.form = this.formBuilder.group({
      textMessage: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  getComment() {
    const id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.commentService.getComment(id).subscribe((comment: Comment) => {
      this.comment = comment;
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

  public close() {
    this.router.navigate(['home']);
  }

  onSubmit(e: Event) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.commentService
      .updateComment({
        ...this.form.value,
        _id: id,
      })
      .toPromise();
    this.router.navigate(['home']);
    this.snackBar.open('You successfully updated a comment!', '', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}
