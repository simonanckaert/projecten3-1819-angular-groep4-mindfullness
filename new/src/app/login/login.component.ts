import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  options: FormGroup;
  error: any;
  public loginForm: FormGroup;

  constructor(
    public af: AngularFireAuth,
    private router: Router,
    private fb: FormBuilder,
    private afs: AngularFirestore
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.af.auth
        .signInWithEmailAndPassword(
          this.loginForm.value.email,
          this.loginForm.value.password
        )
        .then(success => {
          this.validateAdmin(success.user);
          /*console.log(success);
           */
        })
        .catch(err => {
          console.log(err);
          this.error = err;
        });
    }
  }

  validateAdmin(userCredential: User) {
    console.log(userCredential.uid);
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`admins/${userCredential.uid}`);
    const user = userRef.valueChanges();
    user.subscribe(value => {
      if (value !== undefined) {
        localStorage.setItem('user', this.af.idToken + '');
        // console.log(this.af.user);
        this.router.navigate(['home']);
      }
    });
  }
}
