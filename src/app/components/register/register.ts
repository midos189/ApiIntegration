import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  registerForm: FormGroup;
  submittedData: any = null;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        Mobile: ['', [Validators.required, Validators.pattern(/^(010|011|012|015)[0-9]{8}$/)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.checkPassword }
    );
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.valid) {
      this.submittedData = this.registerForm.value;
      console.log(this.submittedData);
      this.reset();
    }
  }

  checkPassword = (group: AbstractControl): ValidationErrors | null => {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
  };

  reset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }

  closeCard(): void {
    this.submittedData = null;
  }
}
