import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PostService } from '../../../blog/services/post.service';

@Component({
  selector: 'app-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.less'],
})
export class PostFormComponent {
  form: FormGroup;
  userPatt = '^[a-zA-Zs]{3,20}$';
  errors: any = {
    required: 'You must enter a value',
    minlength: 'Write your title/description* Min. 10 symbols',
    pattern: 'Enter your name* Min. 3 symbols and only letters*',
  };

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PostFormComponent>,
    private postService: PostService
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(this.userPatt)]],
      title: ['', [Validators.required, Validators.minLength(10)]],
      about: ['', [Validators.required, Validators.minLength(10)]],
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
    return er ? this.errors[er] : '';
  }

  onSubmit(e: Event) {
    this.postService.updatePostData({...this.form.value, today: new Date() });
    this.dialogRef.close();
  }
}