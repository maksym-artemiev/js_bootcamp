import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user/user.interface';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LogService } from 'src/app/shared/services/login-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
})
export class UserComponent implements OnInit {
  user!: User;
  form!: FormGroup;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private loger: LogService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => (this.user = user));
    this.form = this.formBuilder.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      login: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  isFormInvalid(formControl: string): boolean {
    return this.form.get(formControl)?.status == 'INVALID';
  }

  onHomeBack(): void {
    this.router.navigate(['home']);
  }

  openSnackBar(): void {
    this.snackBar.open('You successfuly changed your profile', 'Ok)', {
      duration: 5000,
    });
  }

  public async deleteAndSignOut(): Promise<void> {
    await this.userService.deleteUser();
    this.loger.cleanInfo();
    this.router.navigate(['home']);
    this.snackBar.open('You delete your profile from our resourse...', 'Ok)', {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }

  onFormSubmit(e: Event): void {
    this.userService.update(this.form.value);
    this.form.reset();
    this.router.navigate(['home']);
  }
}
