import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registreren',
  templateUrl: './registreren.component.html',
  styleUrls: ['./registreren.component.css']
})
export class RegistrerenComponent implements OnInit {
  state: string = '';
  
  error: any;
  errorPassword:any;

  public registrerenForm: FormGroup;
  public emailField: FormControl = new FormControl('', [Validators.required]);
  public passwordField: FormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor(public af: AngularFireAuth, private router: Router) {
    /*this.af.user.subscribe(user => {
      this.router.navigateByUrl('/registreren');
    })*/
  }

  ngOnInit() {
    this.registrerenForm = new FormGroup({
      email: this.emailField,
      password: this.passwordField
    })
  }


  onSubmit(formData) {
    this.error = null;
    this.errorPassword = null;
    if (formData.valid) {
      console.log(formData.value);
      var foutwachtwoord:Boolean = false;
      
      if(formData.value.password.length < 6) {
        foutwachtwoord = true;
      }


      this.af.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password)
        .then((success) => {
          console.log("success");
          this.router.navigateByUrl('/');
        }).catch((err) => {
          console.log(err);
          if(err && formData.value.password.length < 6) {
            this.error = err;
            this.errorPassword = "w";
          }
          else if(err && formData.value.password.length > 5) {
            this.error = err;
          } 

          
        })

      
    }
    /* User deleten
    var user = this.af.auth.currentUser;
    user.delete().then(function() {}).catch(function(error) { console.log(error)}*/
  }

}
