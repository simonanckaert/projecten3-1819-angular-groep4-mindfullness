import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthenticationService {
  public aangemeld: boolean = false;

  constructor(private af: AngularFireAuth) {
    if(this.af.user) {
        this.aangemeld = true;
    }
  }  

  /*isAangemeld() {
    this.aangemeld = true;
  }

  isAfgemeld() {
    this.aangemeld = false;
  }*/
}
