import { Oefening } from "../oefening/oefening.model";

export class Sessie {
  private _naam: string;
  private _dateAdded: Date = new Date();
  private _beschrijving: string;
  private _oefeningen = new Array<Oefening>();
  private _id: number;

  constructor(naam: string, beschrijving: string, oefeningen: Array<Oefening>, id: number) {
    this._naam = naam;
    this._beschrijving = beschrijving;
    this._oefeningen = oefeningen;
    this._id = id;
  }

  get naam(): string {
    return this._naam;
  }

  get beschrijving(): string {
    return this._beschrijving;
  }

  get id(): number {
    return this._id;
  }

  set naam(naam: string) {
    this._naam = naam;
  }

  set beschrijving(beschrijving: string) {
    this._beschrijving = beschrijving;
  }

  addOefening(oefening: Oefening) {
    this._oefeningen.push(oefening);
  }

  get oefeningen() {
    return this._oefeningen;
  }
}
