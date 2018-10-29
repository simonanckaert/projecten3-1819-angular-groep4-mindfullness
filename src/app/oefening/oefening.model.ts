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

  /**
   * Geeft het id van een oefening terug
   */
  get id(): number {
    return this._id;
  }

  /**
   * Geeft de naam van een oefening terug
   */
  get naam(): string {
    return this._naam;
  }

  /**
   * Geeft de beschrijving van een oefening terug
   */
  get beschrijving(): string {
    return this._beschrijving;
  }

  /**
   * @param naam: Dit is de nieuwe naam van de oefening
   */
  set naam(naam: string) {
    this._naam = naam;
  }

  /**
   * @param beschrijving: Dit is de nieuwe beschrijving van de oefening
   */
  set beschrijving(beschrijving: string) {
    this._beschrijving = beschrijving;
  }
}
