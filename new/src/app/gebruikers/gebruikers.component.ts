import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import { GebruikerDataService } from '../gebruiker-data.service';

export interface Groep {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-gebruikers',
  templateUrl: './gebruikers.component.html',
  styleUrls: ['./gebruikers.component.css']
})
export class GebruikersComponent implements OnInit {

  private _gebruikers: Observable<any[]>;

  groepen: Groep[] = [
    { value: '1', viewValue: 'Groep 1' },
    { value: '2', viewValue: 'Groep 2' },
    { value: '3', viewValue: 'Groep 3' }
  ];

  displayedColumns: string[] = ['name', 'email', 'group'];
  dataSource: MatTableDataSource<any>;

  constructor(public afDb: AngularFireDatabase, public af: AngularFireAuth, public gService: GebruikerDataService) {
    this._gebruikers = this.getItems();
    this._gebruikers.subscribe(result => this.dataSource = new MatTableDataSource(result));
    /*setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.gebruikers);
    }, 1000);*/
  }

  getItems(): Observable<any[]> {
    // return this.afDb.list('Users').valueChanges();
    return this.gService.getUsers();
  }

  get items(): Observable<any[]> {
    return this._gebruikers;
  }

  ngOnInit() { }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  changeGroup(uid, nr) {
    console.log(uid, nr.value);
    // this.gService.getUserById(value).subscribe(result => console.log(result.name));
    const gebruiker = this.gService.getUserById(uid);
    gebruiker.subscribe(result => console.log(result));
    gebruiker.subscribe(result => {
      const updatedGebruiker = {
        'email': result.email,
        'groepnr': nr.value.toString(),
        'name': result.name
      };
      this.gService.updateUser(uid, updatedGebruiker);
    });
  }
}
