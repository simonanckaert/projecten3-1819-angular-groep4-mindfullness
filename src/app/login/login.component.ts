import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
//import { moveIn, fallIn} from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']/*,
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}*/
})
export class LoginComponent implements OnInit {

  state: string = '';
  error: any;
  public loginForm: FormGroup;
  public email: FormControl = new FormControl('email');
  public password: FormControl = new FormControl('password');

  constructor(public af: AngularFireAuth, private router: Router) {
    /*this.af.user.subscribe(user => {
      this.router.navigateByUrl('/login');
    })*/
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    })
  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password)
        .then((success) => {
          console.log(success);
          localStorage.setItem('user', this.af.idToken + '');
          console.log(this.af.user);
          this.router.navigate(['/']);
        }).catch((err) => {
          console.log(err);
          this.error = err;
        })
    }
  }



}
