import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  options: FormGroup;
  state: String = '';
  error: any;
  public loginForm: FormGroup;
  public email: FormControl = new FormControl('');
  public password: FormControl = new FormControl('');

  constructor(public af: AngularFireAuth, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.af.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
        .then((success) => {
          console.log(success);
          localStorage.setItem('user', this.af.idToken + '');
          console.log(this.af.user);
          this.router.navigate(['/']);
        }).catch((err) => {
          console.log(err);
          this.error = err;
        });
    }
  }
}
