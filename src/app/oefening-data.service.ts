import { Injectable } from '@angular/core';
import { Oefening } from './oefening/oefening.model';

@Injectable()
export class OefeningDataService {
  private _oefeningen = new Array<Oefening>();

  constructor() {
    const oefening1 = new Oefening('Oefening 1', 'Dit is oefening 1');
    const oefening2 = new Oefening('Oefening 2', 'Dit is oefening 2');
    const oefening3 = new Oefening('Oefening 3', 'Dit is oefening 3');
    const oefening4 = new Oefening('Oefening 4', 'Dit is oefening 4');
    const oefening5 = new Oefening('Oefening 5', 'Dit is oefening 5');
    const oefening6 = new Oefening('Oefening 6', 'Dit is oefening 6');
    this._oefeningen.push(oefening1, oefening2, oefening3, oefening4, oefening5, oefening6);
   }

   get oefeningen(): Oefening[] {
     return this._oefeningen;
   }

   voegNieuweOefeningToe(oefening) {
     this._oefeningen.push(oefening);
   }
}
