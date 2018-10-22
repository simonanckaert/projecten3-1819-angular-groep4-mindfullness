import { Injectable } from '@angular/core';
import { Klant } from './klant/klant.model';

@Injectable()
export class KlantDataService {
  private _klanten = new Array<Klant>();

  constructor() { 
    const klant1 = new Klant('Simon', 'jklm', 'jklsf');
    const klant2 = new Klant('Arno', 'dfsdf', 'jklsf');
    const klant3 = new Klant('Angelo', 'sdfgdsf', 'jklsf');
    const klant4 = new Klant('Jolan', 'dfsgsd', 'jklsf');
    const klant5 = new Klant('Bram', 'dshfgh', 'jklsf');
    const klant6 = new Klant('Stijn', 'dghfd', 'jklsf');
    const klant7 = new Klant('Bart', 'dsfgdh', 'jklsf');
    const klant8 = new Klant('Sjaak', 'dghfj', 'jklsf');
    this._klanten.push(klant1,klant2,klant3,klant4,klant5,klant6,klant7,klant8);
  }

  get klanten() :Klant[] {
    return this._klanten;
  }

  voegNieuweKlantToe(klant : Klant) {
    this._klanten.push(klant);
  }
}
