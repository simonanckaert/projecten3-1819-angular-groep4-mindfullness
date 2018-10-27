import { Injectable } from '@angular/core';
import { Sessie } from './sessie/sessie.model';
import { Oefening } from './oefening/oefening.model';
import * as globals from '../globals/globals';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessieDataService {
  private _sessies = new Array<Sessie>();

  constructor(private http: HttpClient) {

    //Voer een get request uit naar de backend met alle sessies
    this.http.get(globals.backendUrl + "/sessies").subscribe((data: Sessie) => {
      Object.assign(this._sessies, data);

      //Per sessie worden de oefeningen ervan opgehaald in de backend en toegevoegd aan het sessieobjec
      this._sessies.forEach((val) => {

        this.http.get(globals.backendUrl + "/oefeningen/" + val.sessieId).subscribe((oef: Array<Oefening>) => {
          //indien er geen oefeningen aanwezig zijn zullen de oefeningen niet toegewezen kunnen worden
          if (oef.length > 0) {
            val.oefeningen = [];
            Object.assign(val.oefeningen, oef)
          };
        });
      });

    });
  }

  get sessies(): Sessie[] {

    return this._sessies;
  }

  voegNieuweSessieToe(sessie) {
    this._sessies.push(sessie);
  }

  bewerkSessie(naam: string, beschrijving: string, id: number) {
    console.log('voor de for loop');

    for (let i = 0; i < this._sessies.length; i++) {
      console.log('tijdens de loop' + i);
      if (this._sessies[i].sessieId === id) {
        console.log('for loop ' + i);
        this._sessies[i].naam = naam;
        this._sessies[i].beschrijving = beschrijving;
      }
    }
  }

  herlaadSessies() {

  }
}
