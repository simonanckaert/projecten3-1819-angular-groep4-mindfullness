import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  name:any;
 
  constructor(public af: AngularFireAuth, private router: Router) {
    this.af.user.subscribe(user => {
      if(user) {
        this.name = user;
      }
    })
  }

  logout() {
    this.af.auth.signOut().then(() => {
      this.router.navigateByUrl('/login');
    })
  }

  

}


