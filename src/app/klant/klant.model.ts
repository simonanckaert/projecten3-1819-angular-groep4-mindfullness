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

    /**
     * Geeft het id van deze klant terug
     */
    get id(): number {
        return this._id;
    }

    /**
     * Geeft de voornaam van deze klant terug
     */
    get voornaam(): string {
        return this._voornaam;
    }

    /**
     * Geeft de achternaam van deze klant terug
     */
    get achternaam(): string {
      return this._achternaam;
    }

    /**
     * Geeft de geboorteDatum terug van deze klant
     */
    get geboorteDatum(): Date {
        return this._geboorteDatum;
    }

    /**
     * Geeft het mailadres van deze klant terug
     */
    get email(): string {
        return this._email;
    }

    /**
     * Geeft het telefoonnummer van deze klant terug
     */
    get telefoonNummer(): string {
        return this._telefoonNummer;
    }
  
    /**
     * Geeft de regio van deze klant terug
     */
    get regio(): string {
      return this._regio;
    }
    
    /**
     * Geeft terug of de klant betaald heeft
     */
    get betaald(): boolean {
      return this._betaald;
    }


    /**
     * Verandert de voornaam van de klant
     * @param nieuw: Dit is de nieuwe voornaam van deze klant
     */

    set voornaam(nieuw: string) {
        this._voornaam = nieuw;
    }



    /**
     * Verandert de achternaam van de klant
     * @param nieuw: Dit is de nieuwe achternaam van deze klant
     */

    set achternaam(nieuw: string) {
      this._achternaam = nieuw;
    }

    /**
     * verandert pauze van de geboortedatum
     * @param nieuw: Dit is de nieuwe geboorteDatum van deze klant
     */
    set geboorteDatum(nieuw: Date) {
        this._geboorteDatum = nieuw;
    }

    /**
     * verandert het id van de klant
     * @param id: Dit is het nieuwe Id van deze klant
     */
    set id(id: number) {
      this._id = id;
    }

     /**
     * verandert de regio van de klant
     * @param regio: Dit is de nieuwe regio van deze klant
     */
    set regio(regio: string) {
      this._regio = regio;
    }
    
     /**
     * verandert het telefoonnummer van de klant
     * @param nummer: Dit is het nieuwe telefoonnummer van deze klant
     */
    set telefoonNummer(nummer: string) {
      this._telefoonNummer = nummer;
    }

    /*
    heeftBetaald(): string {
      return 'ja';
    }

    /**
     * Veranderd de geblokkeerdstatus van deze klant
     */

    geblokkeerd() {
      console.log('ervoor ' + this.isGeblokkeerd());
       this._geblokkeerd = !this._geblokkeerd;
       console.log('erna ' + this.isGeblokkeerd());
    }
    */

    /**
     * Geeft terug of deze klant geblokkeerd is of niet
     */
    isGeblokkeerd() {
        return this._geblokkeerd;
    }

    /**
     * Verandert de mail van de klant
     * @param nieuw: Dit is het nieuwe mailadres van een klant
     */
    set email(nieuw: string) {
        this._email = nieuw;
    }
}
