import { Injectable } from '@angular/core';
import { Oefening } from './oefening/oefening.model';

@Injectable()
export class OefeningDataService {
  private _oefeningen = new Array<Oefening>();

  constructor() {
    const oefening1 = new Oefening('Oefening 1', 'Dit is oefening 1', 0);
    const oefening2 = new Oefening('Oefening 2', 'Dit is oefening 2', 1);
    const oefening3 = new Oefening('Oefening 3', 'Dit is oefening 3', 2);
    const oefening4 = new Oefening('Oefening 4', 'Dit is oefening 4', 3);
    const oefening5 = new Oefening('Oefening 5', 'Dit is oefening 5', 4);
    const oefening6 = new Oefening('Oefening 6', 'Dit is oefening 6', 5);
    const oefening8 = new Oefening('Oefening 7', 'Dit is oefening 8', 7);
    const oefening9 = new Oefening('Oefening 8', 'Dit is oefening 9', 8);
    const oefening10 = new Oefening('Oefening 9', 'Dit is oefening 10', 9);
    const oefening11 = new Oefening('Oefening 10', 'Dit is oefening 11', 10);
    const oefening12 = new Oefening('Oefening 11', 'Dit is oefening 12', 11);
    const oefening13 = new Oefening('Oefening 12', 'Dit is oefening 13', 12);
    this._oefeningen.push(oefening1, oefening2, oefening3, oefening4, oefening5, oefening6, oefening8, oefening9,
              oefening10, oefening11, oefening12, oefening13);
   }

   get oefeningen(): Oefening[] {
     return this._oefeningen;
   }

   voegNieuweOefeningToe(oefening) {
     this._oefeningen.push(oefening);
   }

   bewerkOef(naam: string, beschrijving: string, id: number) {
    console.log('voor de for loop');

    for (let i = 0; i < this._oefeningen.length; i++) {
      console.log('for loop ' + i + ' van de ', this._oefeningen.length);
      if (this._oefeningen[i].id === id) {
        console.log('oefeningnaam: ' + this._oefeningen[i].naam);
       this._oefeningen[i].naam = naam;
       this._oefeningen[i].beschrijving = beschrijving;
     }
    }
  }

    verwijderOef(id: number) {
      for (let i = 0; i < this._oefeningen.length; i++) {
        if (this._oefeningen[i].id === id) {
         // this._oefeningen.pop(2);
        }
      }
    }
  }
