import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../../blog/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormErrors } from '../../../shared/components/create-post-form/create-post-form.interface';
import { Post } from '../../interfaces/post.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-post-page',
  templateUrl: './update-post-page.component.html',
  styleUrls: ['./update-post-page.component.less'],
})
export class UpdatePostPageComponent implements OnInit {
  post!: Post;
  form!: FormGroup;
  errors: FormErrors = {
    required: 'You must enter a value',
    minlength: 'Write your title/description* Min. 10 symbols',
  };

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getPost();
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      about: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  getPost(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.postService.getPostById(id).subscribe((post: Post) => {
      this.post = post;
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
    const id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.postService.updateSelectedPost(
      {
        ...this.form.value,
        createdAt: new Date(),
      },
      id
    );
    this.router.navigate(['home']);
    this.snackBar.open('You successfully updated a post!', '', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}
