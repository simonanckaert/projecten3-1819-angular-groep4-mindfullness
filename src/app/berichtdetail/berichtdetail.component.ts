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
      this.messages = [];
      actions.forEach(action => {
         let message = new Message();
         message.content = action.content;
         message.messageTime = action.messageTime;
         message.messageUser = action.messageUser;

         if(action.admin === undefined){
          message.messageUser = this.user.naam;

         }
         this.messages.push(message);
        });
    });
  }


  postMessage(input : String){
    
    //this.messages = [];
    let messageTime = Date.now();

    //TODO: Haal huidige admin op en vul hier in.
    let messageUser = "Sarah";

    //workaround omdat de database niet ingevuld is met messageUser uit de db op messages vanuit de android kant.
    let admin = true;
    this.db.list("Chat/" + this.user.uid).push({ content: input , messageTime, messageUser, admin});
  }

}
