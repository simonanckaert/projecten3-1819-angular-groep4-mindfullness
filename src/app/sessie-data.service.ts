import { Injectable } from '@angular/core';
import { Sessie } from './sessie/sessie.model';
import { Oefening } from './oefening/oefening.model';

@Injectable({
  providedIn: 'root'
})
export class SessieDataService {
    private _sessies = new Array<Sessie>();

  constructor() {
    const sessie1 = new Sessie('Sessie 1: Het begin', 'Dit is de beschrijving van sessie met nummer 1', []);
    const sessie2 = new Sessie('Sessie 2: Het tweede deel', 'Dit is de beschrijving van sessie met nummer 2',[new Oefening("oefening 1", "dit is een beschrijving")]);
    const sessie3 = new Sessie('Sessie 3: Het derde deel', 'Dit is de beschrijving van sessie met nummer 3', []);
    const sessie4 = new Sessie('Sessie 4: Het vierde deel', 'Dit is de beschrijving van sessie met nummer 4', [new Oefening("Oefening 2", "oefening"), new Oefening("Oefening 3", "halloo")]);
    const sessie5 = new Sessie('Sessie 5: Het vijfde deel', 'Dit is de beschrijving van sessie met nummer 5', []);
    const sessie6 = new Sessie('Sessie 6: Het zesde deel', 'Dit is de beschrijving van sessie met nummer 6',[]);
    const sessie7 = new Sessie('Sessie 7: Het zevende deel', 'Dit is de beschrijving van sessie met nummer 7',[]);
    const sessie8 = new Sessie('Sessie 8: Het achtste deel', 'Dit is de beschrijving van sessie met nummer 8',[]);
    this._sessies.push(sessie1, sessie2, sessie3, sessie4, sessie5, sessie6, sessie7, sessie8);
   }

   get sessies(): Sessie[] {
     return this._sessies;
   }

   voegNieuweSessieToe(sessie) {
     this._sessies.push(sessie);
   }
}
