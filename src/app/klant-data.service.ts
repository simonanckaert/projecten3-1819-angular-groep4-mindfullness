import { Injectable } from '@angular/core';
import { Klant } from './klant/klant.model';
import * as globals from '../globals/globals';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class KlantDataService {
  private _klanten = new Array<Klant>();

  constructor(private http: HttpClient) {

    this.http.get(globals.backendUrl + "/users").subscribe((data: Klant) => {
      Object.assign(this._klanten, data);
    });
  }

  /**
   * Geeft een lijst terug van klanten
   */
  get klanten(): Klant[] {
    return this._klanten;
  }

  /**
   * Voegt een nieuwe klant toe aan de databank
   * @param klant is de klant die zal toegevoegd worden in de databank
   */
  voegNieuweKlantToe(klant: Klant) {
    this._klanten.push(klant);
  }
}
