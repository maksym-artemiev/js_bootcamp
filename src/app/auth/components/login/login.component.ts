import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginServise } from '../../services/login.servise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginServise,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  isFormInvalid(formControl: string): boolean {
    return this.form.get(formControl)?.status == 'INVALID';
  }

  onFormSubmit(e: Event) {
    this.loginService.login(this.form.value);
    this.form.reset();
    this.router.navigate(['home']);
  }

  onRegistrationBack(): void {
    this.router.navigate(['registration']);
  }

  openSnackBar(): void {
    this.snackBar.open('You successfuly login', 'Ok.', {
      duration: 5000,
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
}
