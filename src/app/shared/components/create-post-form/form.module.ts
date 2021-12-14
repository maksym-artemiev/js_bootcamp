import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PostFormComponent } from './create-post-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PostFormComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [PostFormComponent],
})
export class FormModule {}
