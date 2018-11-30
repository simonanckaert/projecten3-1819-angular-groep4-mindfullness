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

  public groepen: Groep[] = [];
  public groepNummers = [' A '];

  public selectedGroep = 'alle gebruikers';

  displayedColumns: string[] = ['name', 'email', 'group'];
  dataSource: MatTableDataSource<any>;

  constructor(public afDb: AngularFireDatabase, public af: AngularFireAuth, public gService: GebruikerDataService) {
    this._gebruikers = this.getItems();
    this._gebruikers.subscribe(result => {
      this.setGroepen(result);
      this.dataSource = new MatTableDataSource(result);
      console.log(this.dataSource.data);
    });
  }

  getItems(): Observable<any[]> {
    return this.gService.getUsers();
  }

  get items(): Observable<any[]> {
    return this._gebruikers;
  }

  ngOnInit() { }

  setGroepen(result: any[]) {
    result.forEach(gebruiker => {
      if (this.groepNummers.indexOf(gebruiker.groepnr) === -1) {
        this.groepNummers.push(gebruiker.groepnr);
      }
    });

    this.groepNummers.sort();

    this.groepNummers.forEach(nummer => {
      if (nummer !== ' A ') {
        this.groepen.push({ value: nummer, viewValue: 'Groep ' + nummer });
      } else {
        this.groepen.push({ value: nummer, viewValue: 'Geen' });
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyGroepFilter(filterValue: string) {
    this._gebruikers.subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      if (filterValue !== ' A ') {
        const newData = [];
        this.dataSource.data.forEach(element => {
          if (element.groepnr === filterValue) {
            newData.push(element);
          }
        });
        this.dataSource = new MatTableDataSource(newData);
        this.selectedGroep = 'Groep ' + filterValue;
      } else {
        this.selectedGroep = 'alle gebruikers';
      }
    });
  }

  changeGroup(uid, nr) {
    const gebruiker = this.gService.getUserById(uid);
    gebruiker.subscribe(result => {
      const updatedGebruiker = {
        'email': result.email,
        'groepnr': nr.value.toString(),
        'name': result.name
      };
      this.gService.updateUser(uid, updatedGebruiker).subscribe((val) => console.log(val));
    });
  }
}
