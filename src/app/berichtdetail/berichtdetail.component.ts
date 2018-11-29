import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-berichtdetail',
  templateUrl: './berichtdetail.component.html',
  styleUrls: ['./berichtdetail.component.css']
})
export class BerichtdetailComponent implements OnInit {

  @Input() public ref: String;
  name: any;
  msgVal: string = '';
  
  constructor(public db: AngularFireDatabase) {
    let url = "Chat/" + this.ref;

    //this.db.list<Message>(url).push({content:'item', messageTime:'13213213', MessageUser: 'Jooo'})
    



   /* this.messages = this.messageRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => Object.values(c.payload)
        )
      )
    );*/

  }
  ngOnInit() {
  }
}
class Message {
  content : String; 
  messageTime : String;
  MessageUser : String;
}
