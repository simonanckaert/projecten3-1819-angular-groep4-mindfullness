export class Oefening {
  private _id: number;
  private _naam: string;
  private _dateAdded: Date = new Date();
  private _beschrijving: string;
 // private _oefening: Object;

  constructor(naam: string, beschrijving: string, id: number) {
    this._naam = naam;
    this._beschrijving = beschrijving;
    this._id = id;
  //  this._oefening = oefening;
  }

  get id(): number {
    return this._id;
  }

  get naam(): string {
    return this._naam;
  }

  get beschrijving(): string {
    return this._beschrijving;
  }

  set naam(naam: string) {
    this._naam = naam;
  }

  set beschrijving(beschrijving: string) {
    this._beschrijving = beschrijving;
  }
}
