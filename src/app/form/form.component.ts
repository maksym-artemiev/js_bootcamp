import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PostService } from '../post.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})


export class FormComponent {
  form: FormGroup;
  userPatt = "^[a-zA-Z\s]*$";
 
  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<FormComponent>, private postService: PostService) {
    this.form = this.formBuilder.group({
          name: ['', [Validators.required,
                      Validators.minLength(3), 
                      Validators.pattern(this.userPatt)]],
          title: ['', [Validators.required,
                      Validators.minLength(10)]],
          about: ['', [Validators.required,
                      Validators.minLength(1)]]
      })
  }

  onSubmit(e:Event) {
    this.postService.updatePostData(this.form.value);
    this.dialogRef.close();
  }
   
  onNoClick(): void {
    this.dialogRef.close();
  }
}


