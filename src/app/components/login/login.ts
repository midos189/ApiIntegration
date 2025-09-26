import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginForm: FormGroup;
  submittedData: any = null;

  constructor(private fb: FormBuilder,private auth:Auth,private rout:Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      //const {username,password} = this.loginForm.value;
      this.auth.login('mor_2314','83r5^_').subscribe(()=>{this.rout.navigate(['/Products'])})
    }
  }
  reset(){
    this.loginForm.reset();
  }

  closeCard(): void {
    this.submittedData = null;
  }
}

