import { Injectable } from '@angular/core';
import { Sessie } from './sessie/sessie.model';

@Injectable({
  providedIn: 'root'
})
export class SessieDataService {
    private _sessies = new Array<Sessie>();

  constructor() {
    const sessie1 = new Sessie('Sessie 1: Het begin');
    const sessie2 = new Sessie('Sessie 2: Het tweede deel');
    const sessie3 = new Sessie('Sessie 3: Het derde deel');
    const sessie4 = new Sessie('Sessie 4: Het vierde deel');
    const sessie5 = new Sessie('Sessie 5: Het vijfde deel');
    const sessie6 = new Sessie('Sessie 6: Het zesde deel');
    const sessie7 = new Sessie('Sessie 7: Het zevende deel');
    const sessie8 = new Sessie('Sessie 8: Het achtste deel');
    this._sessies.push(sessie1, sessie2, sessie3, sessie4, sessie5, sessie6, sessie7, sessie8);
   }

   get sessies(): Sessie[] {
     return this._sessies;
   }

   voegNieuweSessieToe(sessie) {
     this._sessies.push(sessie);
   }
}
