import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PostService } from '../post.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
})
export class FormComponent {
  form: FormGroup;
  userPatt = '^[a-zA-Zs]*$';

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FormComponent>,
    private postService: PostService
  ) {
    this.form = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.userPatt),
        ],
      ],
      title: ['', [Validators.required, Validators.minLength(10)]],
      about: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  getErrorMessageA() {
    if (this.form.controls['name'].hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.controls['name'].hasError('pattern') ||
      this.form.controls['name'].hasError('minlength')
      ? 'Enter your name* Min. 3 symbols and only letters*'
      : '';
  }

  getErrorMessageB() {
    if (this.form.controls['title'].hasError('required')) {
      return 'You must enter a value';
    }
    return this.form.controls['title'].hasError('minlength')
      ? 'Enter your title* Min. 10 symbols*'
      : '';
  }

  getErrorMessageC() {
    if (this.form.controls['about'].hasError('required')) {
      return 'You must enter a value';
    }
    return this.form.controls['about'].hasError('minlength')
      ? 'About what your post* Min. 5 symbols*'
      : '';
  }

  onSubmit(e: Event) {
    this.postService.updatePostData(this.form.value);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
