import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  FormBuilder, 
  FormGroup, 
  Validators ,
  ReactiveFormsModule
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-email-login',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, SharedModule],
  templateUrl: './email-login.component.html',
  styleUrl: './email-login.component.scss'
})
export class EmailLoginComponent implements OnInit {

  form: FormGroup;

  type: 'login' | 'signUp' | 'reset' = 'signUp';

  loading:boolean = false;

  serverMessage: string = "";

  constructor(public authService: AuthService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', []]
    })
  }

  changeType(value: any) {
    this.type = value;
  }

  get isLogin() {
    return this.type === 'login';
  }

  get isRegister() {
    return this.type === "signUp";
  }

  get isPasswordReset() {
    return this.type === "reset";
  }

  get email() {
    return this.form.get("email")?.value || "";
  }

  get password() {
    return this.form.get("password")?.value;
  }

  get passwordConfirm() {
    return this.form.get("passwordConfirm")?.value;
  }

  get passwordDoesMatch() {
    if (this.type !== 'signUp') {
      return true;
    }
    else {
      return this.password === this.passwordConfirm;
    }
  }

  ngOnInit(): void {
      console.log("Hallo");
  }

  async onSubmit() {
    try {
      if (this.type === "signUp") {
        console.log("Signing up ");
      } else if (this.type === "login") {
        console.log("Error");
      }
    } catch(err) {
      this.serverMessage = err as string;
      console.log(this.serverMessage);
    }
    
  }
  
}
