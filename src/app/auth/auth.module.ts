import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormModule } from '../shared/components/create-post-form/form.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, FormsModule, FormModule, ReactiveFormsModule, MatButtonModule, MatInputModule],
  exports: [AuthComponent],
})
export class AuthModule {}
