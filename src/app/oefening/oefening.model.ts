export class Oefening {
  private _id: number;
  private _naam: string;
  private _dateAdded: Date = new Date();
  private _beschrijving: string;
 // private _oefening: Object;

  constructor(naam: string, beschrijving: string) {
    this._naam = naam;
    this._beschrijving = beschrijving;
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
}
