import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from "rxjs";
import * as firebase from "firebase";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-berichten",
  templateUrl: "./berichten.component.html",
  styleUrls: ["./berichten.component.css"]
})
export class BerichtenComponent implements OnInit {
  chatRef$: AngularFireList<any>;
  public klanten: ChatUser[] = [];
  public ongelezen: number[] = [];
  public gekozenChatUser: ChatUser = null;
  public items: Observable<any[]>;
  public messagesfb: Observable<any>;
  public gelezenMessages: Observable<any>;
  public ongelezenMessages: Observable<any>;

  public _name: string = "";
  textChat: string = null;
  private teller: number = 0;
  public messages: Message[] = null;

  constructor(
    public db: AngularFireDatabase,
    public af: AngularFireAuth,
    private afs: AngularFirestore,
    private cd: ChangeDetectorRef
  ) {
    this.items = db.list("Chat").snapshotChanges();

    this.items.subscribe(actions => {
      this.klanten = [];
      actions.forEach(action => {
        this.zoekKlant(action.key).subscribe(value => {
          let chatUser = new ChatUser();
          chatUser.naam = value;
          chatUser.uid = action.key;
          this.klanten.push(chatUser);
        });
      });
    });

    this.items.subscribe(actions => {
      this.ongelezen = [];
      actions.forEach(action => {
          this.geefWeerOngelezens(action.key).subscribe( value => {
            let waarde: number = 0;
            value.forEach( v => {
              if(!v.gelezen){
                waarde++;
              }
            })
            this.ongelezen.push(waarde);
          });
      });
    });

    const cu = this.af.user.subscribe(au => {
      if (au) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(
          `admins/${au.uid}`
        );
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

  ngOnInit() {}

  //haalt de naam van de klant op uit hun id die bij de chatberichten hoort en geeft deze terug als een observable.
  zoekKlant(id: String): Observable<any> {
    return this.db.object("Users/" + id + "/name").valueChanges();
  }

  kiesGesprek(user: ChatUser) {
    this.gekozenChatUser = user;
    this.getGesprekken(user);
  }

  getGesprekken(user: ChatUser) {
    this.messages = [];
    this.messagesfb = this.db.list("Chat/" + user.uid).valueChanges();

    this.messagesfb.subscribe(actions => {
      this.messages = [];
      actions.forEach(a => {
        let message = new Message();
        message.content = a.content;
        message.messageTime = a.messageTime;
        message.messageUser = a.messageUser;
        message.admin = true;

        if (a.admin === undefined) {
          message.admin = false;
          message.messageUser = this.gekozenChatUser.naam;
        }
        this.messages.push(message);
      });
    });
    this.controleerGelezen();
  }

  geefWeerOngelezens(uid: String): Observable<any> {
    return  this.db.list("Chat/" + uid).valueChanges();
  }


  geefWeerOngelezen(uid: String): number {
    this.ongelezenMessages = this.db.list("Chat/" + uid).valueChanges();
    this.ongelezenMessages.subscribe(actions => {
      let teller;
      actions.forEach(a => {
        if (!a.gelezen) {
          teller++;
        }
      });
      console.log(teller);
      this.teller = teller;
    });
    console.log(this.teller);
    return this.teller;
  }

  controleerGelezen() {
    this.gelezenMessages = this.db
      .list("Chat/" + this.gekozenChatUser.uid)
      .snapshotChanges();
    this.gelezenMessages.subscribe(actions => {
      actions.forEach(a => {
        this.db
          .list("Chat/" + this.gekozenChatUser.uid)
          .update(a.key, { gelezen: true });
      });
    });
  }

  stuurBericht(tekst: String) {
    if (tekst != "") {
      //this.messages = [];
      let messageTime = Date.now();

      //TODO: Haal huidige admin op en vul hier in.
      let messageUser = this._name;

      //workaround omdat de database niet ingevuld is met messageUser uit de db op messages vanuit de android kant.
      let admin = true;
      let gelezen = true;
      this.db
        .list("Chat/" + this.gekozenChatUser.uid)
        .push({ content: tekst, gelezen, messageTime, messageUser, admin });

      this.textChat = "";
    }
  }
}
export class Message {
  content: String;
  messageTime: String;
  messageUser: String;
  admin: boolean;
}

export class ChatUser {
  naam: String;
  uid: String;
  ongelezen: number;
}
