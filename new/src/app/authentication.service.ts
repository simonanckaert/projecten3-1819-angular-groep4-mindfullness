import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public aangemeld: Boolean = false;
  constructor(private af: AngularFireAuth) {
    if (this.af.user) {
      this.aangemeld = true;
    }
   }
}
