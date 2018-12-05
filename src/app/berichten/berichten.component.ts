import { Component, OnInit } from "@angular/core";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "angularfire2/database";
import { Observable } from "rxjs";
import { MatTableDataSource } from "@angular/material";
import { map } from "rxjs/operators";
import * as firebase from "firebase";

@Component({
  selector: "app-berichten",
  templateUrl: "./berichten.component.html",
  styleUrls: ["./berichten.component.css"]
})
export class BerichtenComponent implements OnInit {
  chatRef$: AngularFireList<any>;
  items: Observable<any[]>;
  public klanten: ChatUser[] = [];
  public gekozenChatUser: ChatUser = null;
  public messagesfb: Observable<any>;

  public messages: Message[] = null;

  constructor(public db: AngularFireDatabase) {
    this.items = db.list("Chat").snapshotChanges();
    this.items.subscribe(actions => {
      this.klanten = [];
      actions.forEach(action => {
        this.zoekKlant(action.key).subscribe(value => {
          let chatuser = new ChatUser();
          chatuser.naam = value;
          chatuser.uid = action.key;
          chatuser.messages = action.payload.val();
          this.klanten.push(chatuser);
        });
      });
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
  }

stuurBericht(tekst : String){
  if (tekst != "") {
    //this.messages = [];
    let messageTime = Date.now();

    //TODO: Haal huidige admin op en vul hier in.
    let messageUser = "Sarah";

    //workaround omdat de database niet ingevuld is met messageUser uit de db op messages vanuit de android kant.
    let admin = true;
    this.db
      .list("Chat/" + this.gekozenChatUser.uid)
      .push({ content: tekst, messageTime, messageUser, admin });
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
  messages: Message[];
}
