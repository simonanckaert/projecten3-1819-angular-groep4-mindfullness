export class Klant {
    private _id: number;
    private _voornaam: string;
    private _achternaam: string;
    private _geboorteDatum: Date;
    private _mailadres: string;
    private _geblokkeerd: boolean;

    constructor(vnaam: string, anaam: string, gDatum: Date, email: string) {
        this._voornaam = vnaam;
        this._achternaam = anaam;
        this._geboorteDatum = gDatum;
        this._mailadres = email;
        this._geblokkeerd = false;

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

    get mailadres(): string {
        return this._mailadres;
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

    geblokkeerd() {
        console.log('we zitten in geblokkeerd');
        console.log(this._geblokkeerd);
        this._geblokkeerd = !this._geblokkeerd;
        console.log(this._geblokkeerd);
    }

    isGeblokkeerd() {
        return this._geblokkeerd;
    }

    set mailadres(nieuw: string) {
        this._mailadres = nieuw;
    }
}
