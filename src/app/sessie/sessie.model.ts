import { Oefening } from "../oefening/oefening.model";

export class Sessie {
  private _naam: string;
  private _dateAdded: Date = new Date();
  private _beschrijving: string;
  private _oefeningen = new Array<Oefening>();

  constructor(naam: string, beschrijving: string, oefeningen: Array<Oefening>) {
    this._naam = naam;
    this._beschrijving = beschrijving;
    this._oefeningen = oefeningen;
  }

  get naam(): string {
    return this._naam;
  }

  get beschrijving(): string {
    return this._beschrijving;
  }

  addOefening(oefening: Oefening) {
    this._oefeningen.push(oefening);
  }

  get oefeningen() {
    return this._oefeningen;
  }
}
