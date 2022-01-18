import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServise } from '../../services/login.servise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private loginService: LoginServise, private router: Router) {
    this.form = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  isFormInvalid(formControl: string): boolean {
    return this.form.get(formControl)?.status == 'INVALID';
  }


  onFormSubmit(e: Event) {
    this.loginService.login(this.form.value);
    // this.form.reset();
    this.router.navigate(['home']);
  }

  onRegistrationBack() {
    this.router.navigate(['registration']);
  }

  ngOnInit(): void {
  }

}
