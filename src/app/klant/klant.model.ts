export class Klant {
    private _id: number;
    private _voornaam: string;
    private _achternaam: string;
    private _geboorteDatum: Date;
    private _email: string;
    private _regio: string;
    private _telefoonNummer: string;
    private _betaald: boolean;
    private _geblokkeerd: boolean;

    constructor(vnaam: string, anaam: string, gDatum: Date, email: string, regio: string, nummer: string) {
        this._voornaam = vnaam;
        this._achternaam = anaam;
        this._geboorteDatum = gDatum;
        this._email = email;
        this._regio = regio;
        this._telefoonNummer = nummer;
        this._betaald = false;
    }

    get id(): number {
        return this._id;
    }

    get voornaam(): string {
        return this._voornaam;
    }

    get achternaam(): string {
      return this._achternaam;
  }

    get geboorteDatum(): Date {
        return this._geboorteDatum;
    }

    get email(): string {
        return this._email;
    }

    get telefoonNummer(): string {
        return this._telefoonNummer;
    }

    get regio(): string {
      return this._regio;
    }

    get betaald(): boolean {
      return this._betaald;
    }

    set voornaam(nieuw: string) {
        this._voornaam = nieuw;
    }

    set achternaam(nieuw: string) {
      this._achternaam = nieuw;
    }

    set geboorteDatum(nieuw: Date) {
        this._geboorteDatum = nieuw;
    }

    set id(id: number) {
      this._id = id;
    }

    set regio(regio: string) {
      this._regio = regio;
    }

    set telefoonNummer(nummer: string) {
      this._telefoonNummer = nummer;
    }

    /*
    heeftBetaald(): string {
      return 'ja';
    }
    geblokkeerd() {
      console.log('ervoor ' + this.isGeblokkeerd());
       this._geblokkeerd = !this._geblokkeerd;
       console.log('erna ' + this.isGeblokkeerd());
    }
    */

    isGeblokkeerd() {
        return this._geblokkeerd;
    }

    set email(nieuw: string) {
        this._email = nieuw;
    }
}
