import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  public aangemeld: boolean = false;

  constructor() {
    if(localStorage.getItem('user')) {
        this.aangemeld = true;
    }
  }  

  isAangemeld() {
    this.aangemeld = true;
  }

  isAfgemeld() {
    this.aangemeld = false;
  }
}
