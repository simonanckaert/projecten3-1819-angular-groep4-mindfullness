import { Injectable } from '@angular/core';
import { Sessie } from './sessie/sessie.model';
import { Oefening } from './oefening/oefening.model';

@Injectable({
  providedIn: 'root'
})
export class SessieDataService {
  private _sessies = new Array<Sessie>();

  constructor() {
    const sessie1 = new Sessie('Sessie 1: Het begin', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      [new Oefening('oefening 1', 'dit is een beschrijving'), new Oefening('oefening 2', 'dit is een beschrijving'),
       new Oefening('oefening 3', 'dit is een beschrijving'), new Oefening('oefening 4', 'dit is een beschrijving'),
       new Oefening('oefening 5', 'dit is een beschrijving'), new Oefening('oefening 6', 'dit is een beschrijving'),
       new Oefening('oefening 6', 'dit is een beschrijving'), new Oefening('oefening 7', 'dit is een beschrijving')], 0);
    const sessie2 = new Sessie('Sessie 2: Het tweede deel', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    [new Oefening('oefening 1', 'dit is een beschrijving'), new Oefening('oefening 1', 'dit is een beschrijving'),
    new Oefening('oefening 1', 'dit is een beschrijving'), new Oefening('oefening 1', 'dit is een beschrijving'),
    new Oefening('oefening 1', 'dit is een beschrijving'),], 1);
    const sessie3 = new Sessie('Sessie 3: Het derde deel', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [
    new Oefening('oefening 1', 'dit is een beschrijving'), new Oefening('oefening 1', 'dit is een beschrijving'),
    new Oefening('oefening 1', 'dit is een beschrijving'), new Oefening('oefening 1', 'dit is een beschrijving')
    ], 2);
    const sessie4 = new Sessie('Sessie 4: Het vierde deel',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       [new Oefening('Oefening 2', 'oefening'), new Oefening('Oefening 3', 'halloo')], 3);
    const sessie5 = new Sessie('Sessie 5: Het vijfde deel',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [
      new Oefening('oefening 1', 'dit is een beschrijving')
    ], 4);
    const sessie6 = new Sessie('Sessie 6: Het zesde deel',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [], 5);
    const sessie7 = new Sessie('Sessie 7: Het zevende deel',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [], 6);
    const sessie8 = new Sessie('Sessie 8: Het achtste deel',
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [], 7);
    this._sessies.push(sessie1, sessie2, sessie3, sessie4, sessie5, sessie6, sessie7, sessie8);
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
      if (this._sessies[i].id === id) {
        console.log('for loop ' + i);
        this._sessies[i].naam = naam;
        this._sessies[i].beschrijving = beschrijving;
      }
     }
   }
}
