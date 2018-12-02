import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Component({
  selector: 'app-berichten',
  templateUrl: './berichten.component.html',
  styleUrls: ['./berichten.component.css']
})
export class BerichtenComponent implements OnInit {

  chatRef$ : AngularFireList<any>;
  items: Observable<any[]>;
  public klanten: ChatUser[] = [];
  

  constructor(public db : AngularFireDatabase ) {
  this.items = db.list("Chat").snapshotChanges();
  this.items.subscribe(actions => {
    actions.forEach(action => {

      this.zoekKlant(action.key).subscribe(value => {
       let chatuser = new ChatUser();
       chatuser.naam = value;
       chatuser.uid = action.key;
       chatuser.messages = action.payload.val();
       this.klanten.push(chatuser);
      }
      )
     // console.log(action.payload.val());
      
    });
     })}  


  ngOnInit() {
  }

  //haalt de naam van de klant op uit hun id die bij de chatberichten hoort en geeft deze terug als een observable.
  zoekKlant(id: String): Observable<any>{
    return this.db.object("Users/" + id + "/name").valueChanges();
  }
  
  zoekChatBericht(userID: String, messageId: String): Observable<any>{
    return this.db.object("Chat/"+userID+"/"+messageId ).valueChanges();
  }
   
}
export class Message {
  content : String; 
  messageTime : String;
  messageUser : String;
}

export class ChatUser{
  naam : String;
  uid : String;
  messages : Message[];
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