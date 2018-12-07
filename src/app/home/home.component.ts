import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface User {
  uid: string;
  email: string;
  displayName?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _datum: Date;
  private _uur: Number;
  private _name: Observable<String>;

  constructor(public af: AngularFireAuth, private afs: AngularFirestore) {
    this._datum = new Date();
    this._uur = this._datum.getHours();

    const cu = this.af.user.subscribe(au => {
      if (au) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`admins/${au.uid}`);
        const user = userRef.valueChanges();
        if (user) {
          user.subscribe(value => {
            this._name = value.displayName;
            // console.log(value.displayName);
          });
        }
      }
    });
  }

  ngOnInit() {
  }

  /**
   * Geeft het uur van nu terug
   */
  get uur(): Number {
    return this._uur;
  }

  get name(): Observable<String> {
    return this._name;
  }

  /**
   * Geeft de begroetboodschap van nu terug
   */
  get berekenGroet(): string {
    if (this.uur < 6) {
      return 'Goeienacht ';
    } else if (this.uur < 12) {
      return 'Goeiemorgen ';
    } else if (this.uur < 14) {
      return 'Goeiemiddag ';
    } else if (this.uur < 18) {
      return 'Goeienamiddag ';
    } else if (this.uur < 22) {
      return 'Goeieavond ';
    } else if (this.uur < 24) {
      return 'Goeienacht ';
    } else {
      return 'Goeiedag ';
    }
  }
}
