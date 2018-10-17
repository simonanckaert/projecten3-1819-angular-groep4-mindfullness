export class Sessie {
  private _naam: string;
  private _dateAdded: Date = new Date();
  private _beschrijving: string;
  private _oefeningen = new Array<String>();

  constructor(naam: string) {
    this._naam = naam;
  }

  get naam(): string {
    return this._naam;
  }

  get beschrijving(): string {
    return this._beschrijving;
  }

  addOefening(naam: string) {
    this._oefeningen.push(`${naam}`);
  }
}
