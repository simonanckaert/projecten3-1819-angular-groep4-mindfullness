import { Component, OnInit, Input } from "@angular/core";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ChatUser, Message } from "../berichten/berichten.component";

@Component({
  selector: "app-berichtdetail",
  templateUrl: "./berichtdetail.component.html",
  styleUrls: ["./berichtdetail.component.css"]
})
export class BerichtdetailComponent implements OnInit {
  @Input() public user: ChatUser;

  messagesfb: Observable<any>;
  messages: Message[] = []

  constructor(public db: AngularFireDatabase) {}

  ngOnInit() {
    let url = "Chat/" + this.user.uid;
    console.log(url);
    this.messagesfb = this.db.list(url).valueChanges();
    this.messagesfb.subscribe(actions => {
      actions.forEach(action => {
         let message = new Message();
         message.content = action.content;
         message.messageTime = action.messageTime;
         message.messageUser = action.messageUser;
         this.messages.push(message);
        });
    });
  }
}
