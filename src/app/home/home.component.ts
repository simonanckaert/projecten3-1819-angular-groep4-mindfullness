import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
//import * as firebase from 'firebase';
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
  private name$: Observable<String>;
  private _onGelezenBericht = 0;

  private dbChat: Observable<any>;
  private dbMessages: Observable<any>;

  constructor(public af: AngularFireAuth, private afs: AngularFirestore) {
    this._datum = new Date();
    this._uur = this._datum.getHours();

    this.controleerGelezen();


    this.af.user.subscribe(au => {
      if (au) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(
          `admins/${au.uid}`
        );
        const user = userRef.valueChanges();
        if (user) {
          user.subscribe(value => {
            this.name$ = value.displayName;
          });
        }
      }
    });
  }

  controleerGelezen() {
    this.dbChat = this.afs.collection("chat").snapshotChanges();

    this.dbChat.subscribe(actions => {
      actions.forEach(chat => {
        this.dbMessages = this.afs.collection("chat").doc(chat.payload.doc.id).collection("messages").valueChanges();
        this._onGelezenBericht = 0;

        this.dbMessages.subscribe(messages => {
          messages.forEach(m => {
            if (!m.gelezen) {
              this._onGelezenBericht++;
            }
          });
        });
       });
    });
  }

  ngOnInit() {}

  /**
   * Geeft het uur van nu terug
   */
  get uur(): Number {
    return this._uur;
  }

  get name(): Observable<String> {
    return this.name$;
  }
  ongelezenBericht(): String {
    if (this._onGelezenBericht === 0) {
      return 'U heeft geen nieuwe berichten.';
    } else if (this._onGelezenBericht === 1) {
      return 'U heeft 1 nieuw bericht.';
    } else if (this._onGelezenBericht > 1) {
      return 'U heeft ' + this._onGelezenBericht + ' berichten.';
    }
  }

  /**
   * Geeft de begroetboodschap van nu terug
   */
  berekenGroet(): string {
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
