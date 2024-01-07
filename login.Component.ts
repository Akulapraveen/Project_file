// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <form FormGroup="loginForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" formControlName="username" required>
        <div *ngIf="loginForm.get('username').hasError('required') && loginForm.get('username').touched">
          Username is required.
        </div>
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" formControlName="password" required>
        <div *ngIf="loginForm.get('password').hasError('required') && loginForm.get('password').touched">
          Password is required.
        </div>
      </div>

      <button type="submit" [disabled]="loginForm.invalid">Login</button>
    </form>
  `,
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Implement your login logic here
      console.log('Login form submitted:', this.loginForm.value);
    }
  }
}
