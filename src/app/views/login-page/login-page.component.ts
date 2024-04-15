import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { EmailLoginComponent } from '../../components/general/email-login/email-login.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [SharedModule, CommonModule, ReactiveFormsModule, EmailLoginComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit, OnDestroy {

  userIsAuthenticated: boolean = false;
  private authStatusSub?: Subscription;

  signUp: boolean = false;
  signIn: boolean = true;

  userEmail: string = "";
  userPassword: string = "";
  userPasswordConfirmed: string = "";

  constructor(public authService: AuthService) {}

  logInWithGoogle() {
    this.authService.createUserWithGoogle();
  }

  signOut() {
    this.authService.logOutUser();
  }

  ngOnInit(): void {
      this.authStatusSub = this.authService.getAuthState().subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      })
      console.log(this.userIsAuthenticated);
  }

  ngOnDestroy() {

  }

}
