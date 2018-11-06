import { Injectable } from '@angular/core';
import { Oefening } from './oefening/oefening.model';
import { HttpClient } from '@angular/common/http';
import * as globals from '../globals/globals';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class OefeningDataService {
  private _oefeningen = new Array<Oefening>();


  constructor(private http: HttpClient) {
    this.http.get(globals.backendUrl + "/oefeningen/").subscribe((data: Oefening) => {
      Object.assign(this._oefeningen, data);
    });
  }

  /**
   * Geeft een lijst van oefeningen terug
   */
  get oefeningen(): Oefening[] {
    return this._oefeningen;
  }

  /**
   * Voegt een nieuwe oefening toe aan de databank
   * @param oefening is een nieuwe oefening die zal toegevoegd worden in de databank
   */
  voegNieuweOefeningToe(oefening, file : File) {
    //this._oefeningen.push(oefening);
    var fd = new FormData();
    console.log(file)
    fd.append('naam', oefening.naam)
    fd.append('beschrijving', oefening.beschrijving)
    fd.append('sessieId', "1"); // TODO sessie parameter
    fd.append('file', file);

    //post de oefening data naar de backend
    this.http.post(globals.backendUrl + "/oefeningen", fd,  {
      // headers: {'Content-Type': 'multipart/form-data'}
  }).subscribe(
      res => {
        console.log(res);
        this._oefeningen.push(oefening);
      },
      err => {
        console.log(err);
      }
    );
  }

  /**
   * bewerkt de oefening met het overeenkomstige id
   * @param naam is de nieuwe naam van een oefening
   * @param beschrijving is de nieuwe omschrijving van een oefening
   * @param id is het oefeningId waarbij de wijzigingen zullen gebeuren
   */
  bewerkOef(naam: string, beschrijving: string, id: number) {
    /*console.log('voor de for loop');


    for (let i = 0; i < this._oefeningen.length; i++) {
      console.log('for loop ' + i + ' van de ', this._oefeningen.length);
      if (this._oefeningen[i].id === id) {
        console.log('oefeningnaam: ' + this._oefeningen[i].naam);
        this._oefeningen[i].naam = naam;
        this._oefeningen[i].beschrijving = beschrijving;
      }
    }*/
    const body = new HttpParams()
      .set('naam', naam)
      .set('beschrijving', beschrijving)
      .set('sessieId', id.toString());

    this.http.put(globals.backendUrl + "/oefeningen", body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'x-www-form-urlencoded')
    }).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );

    //update local list
    for (let i = 0; i < this._oefeningen.length; i++) {
      if (this._oefeningen[i].oefeningId === id) {
        this._oefeningen[i].naam = naam;
        this._oefeningen[i].beschrijving = beschrijving;
      }
    }
  }

  /**
   * Verwijdert een oefening met het overeenkomstige id
   * @param id is het oefeningId van de sessie die verwijderd zal worden
   */
  verwijderOef(id: number) {
    for (let i = 0; i < this._oefeningen.length; i++) {
      if (this._oefeningen[i].oefeningId === id) {
        
        const body = new HttpParams()
        .set('oefeningId', id.toString());

        this.http.delete(globals.backendUrl + "/oefeningen/" + id, {
          headers: new HttpHeaders()
            .set('Content-Type', 'x-www-form-urlencoded')
        }).subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);
          }
        );

        break;
      }
    }
  }
}
