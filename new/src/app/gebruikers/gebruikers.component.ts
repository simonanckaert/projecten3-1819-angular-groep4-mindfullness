import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gebruikers',
  templateUrl: './gebruikers.component.html',
  styleUrls: ['./gebruikers.component.css']
})
export class GebruikersComponent implements OnInit {

  public items: Observable<any[]>;

  constructor(public afDb: AngularFireDatabase) {
    this.items = this.getItems();
    this.items.subscribe(value => {
      console.log(value);
    })
  }

  getItems(): Observable<any[]> {
    return this.afDb.list('Users').valueChanges();
  }

  ngOnInit() {
    
  }

}
