export class Klant {
    private _id: number;
    private _gebruikersnaam: string;
    private _wachtwoord: string;
    private _mailadres : string;

    constructor(naam:string, ww:string, email:string) {
        this._gebruikersnaam = naam;
        this._wachtwoord = ww;
        this._mailadres = email;
    }

    get id() : number {
        return this._id;
    }

    get gebruikersnaam(): string {
        return this._gebruikersnaam;
    }

    get wachtwoord() : string {
        return this._wachtwoord;
    }

    get mailadres() : string {
        return this._mailadres;
    }

    set gebruikersnaam(nieuw : string) {
        this._gebruikersnaam = nieuw;
    }

    set wachtwoord(nieuw : string) {
        this._wachtwoord = nieuw;
    }

    set mailadres(nieuw : string) {
        this._mailadres = nieuw;
    }
}