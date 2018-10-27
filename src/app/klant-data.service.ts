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

  get klanten(): Klant[] {
    return this._klanten;
  }


  voegNieuweKlantToe(klant: Klant) {
    this._klanten.push(klant);
  }
}
