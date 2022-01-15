import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormModule } from '../shared/components/create-post-form/form.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [RegistrationComponent, LoginComponent],
  imports: [CommonModule, FormsModule, FormModule, ReactiveFormsModule, MatButtonModule, MatInputModule],
  exports: [RegistrationComponent, LoginComponent],
})
export class AuthModule {}
