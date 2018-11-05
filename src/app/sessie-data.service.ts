import { Injectable } from '@angular/core';
import { Sessie } from './sessie/sessie.model';
import { Oefening } from './oefening/oefening.model';
import * as globals from '../globals/globals';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
const httpPostOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SessieDataService {
  private _sessies = new Array<Sessie>();

  constructor(private http: HttpClient) {

    // Voer een get request uit naar de backend met alle sessies
    this.http.get(globals.backendUrl + '/sessies').subscribe((data: Sessie) => {
      Object.assign(this._sessies, data);

      // Per sessie worden de oefeningen ervan opgehaald in de backend en toegevoegd aan het sessieobject
      this._sessies.forEach((val) => {

        this.http.get(globals.backendUrl + '/oefeningen/' + val.sessieId).subscribe((oef: Array<Oefening>) => {
          // indien er geen oefeningen aanwezig zijn zullen de oefeningen niet toegewezen kunnen worden
          if (oef.length > 0) {
            val.oefeningen = [];
            Object.assign(val.oefeningen, oef);
          }
        });
      });

    });
  }

  get sessies(): Sessie[] {

    return this._sessies;
  }

  voegNieuweSessieToe(sessie: Sessie) {

    const body = new HttpParams()
      .set('naam', sessie.naam)
      .set('beschrijving', sessie.beschrijving);

    // post de sessie data naar de backend
    this.http.post(globals.backendUrl + '/sessies', body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'x-www-form-urlencoded')
    }).subscribe(
      res => {
        console.log(res);
        this._sessies.push(sessie);
      },
      err => {
        console.log('Error occured');
      }
    );
  }

  bewerkSessie(naam: string, beschrijving: string, id: number) {

    const body = new HttpParams()
      .set('naam', naam)
      .set('beschrijving', beschrijving)
      .set('sessieId', id.toString());

    this.http.put(globals.backendUrl + '/sessies', body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'x-www-form-urlencoded')
    }).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured');
      }
    );

    // update local list
    for (let i = 0; i < this._sessies.length; i++) {
      if (this._sessies[i].sessieId === id) {
        this._sessies[i].naam = naam;
        this._sessies[i].beschrijving = beschrijving;
      }
    }
  }

  herlaadSessies() {

  }
}
