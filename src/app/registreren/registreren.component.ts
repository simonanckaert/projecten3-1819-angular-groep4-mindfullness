import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-registreren',
  templateUrl: './registreren.component.html',
  styleUrls: ['./registreren.component.css']
})
export class RegistrerenComponent implements OnInit {
  state: string = '';
  error: any;

  registrerenForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(public af: AngularFireAuth, private router: Router) {
    /*this.af.user.subscribe(user => {
      this.router.navigateByUrl('/registreren');
    })*/
  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password)
        .then((success) => {
          console.log("success");
          this.router.navigateByUrl('/');
        }).catch((err) => {
          console.log(err);
          this.error = err;
        })
    }
    /* User deleten
    var user = this.af.auth.currentUser;
    user.delete().then(function() {}).catch(function(error) { console.log(error)}*/
  }

  ngOnInit() {
  }

}
