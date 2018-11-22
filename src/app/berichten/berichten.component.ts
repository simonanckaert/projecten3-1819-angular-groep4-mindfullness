import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { ActionSequence } from 'protractor';

@Component({
  selector: 'app-berichten',
  templateUrl: './berichten.component.html',
  styleUrls: ['./berichten.component.css']
})
export class BerichtenComponent implements OnInit {

  chatRef$ : AngularFireList<any>;
  items: Observable<any[]>;
  

  constructor(public db : AngularFireDatabase ) {
  this.items = db.list("Chat").snapshotChanges();
  this.items.subscribe(actions => {
    actions.forEach(action => {
      this.zoekKlant(action.key).subscribe(console.log)
      console.log(action.payload.val());
    });
     })}


  ngOnInit() {
  }

  //haalt de naam van de klant op uit hun id die bij de chatberichten hoort en geeft deze terug als een observable.
  zoekKlant(id: String): Observable<any>{
    return this.db.object("Users/" + id + "/name").valueChanges();
  }
  
  zoekChatBericht(userID: String, messageId: String): Observable<any>{
    return this.db.object("Chat/" ).valueChanges();
  }
   
}


class ChatScreen{
  constructor(json: JSON){
    this.id = json.parse("key");
    this.users = json.parse("payload");
  }
  users : ChatUser[];
  id: String;
}

class ChatUser{
  messages : Message[];
}

class Message {
  constructor(json: JSON){
    this.messageUser = json.parse("messageUser");
    this.content = json.parse("content");
    this.messageTime = json.parse("messageTime"); 
  }
  content : String; 
  messageTime : String;
  messageUser : String;
}

/**
{  
  "type":"value",
  "payload":{  
     "VmesvEToHFPvW47nbuxU4ifSy5m1":{  
        "-LRNP8sDVW7RWNnsv_m4":{  
           "content":"hallo",
           "messageTime":1542302769694,
           "messageUser":""
        }
     },
     "lJqAPphAwGWtJ7CdtSfZE3pqI8q2":{  
        "-LRlaS8-G2keYViSiZu1":{  
           "content":"test",
           "messageTime":1542725423964,
           "messageUser":""
        }
     }
  },
  "key":"Chat"
}*/