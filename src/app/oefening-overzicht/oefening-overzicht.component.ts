import { Component, OnInit } from '@angular/core';
import { OefeningDataService } from '../oefening-data.service';
import { Oefening } from '../oefening/oefening.model';
import { FormGroup } from '../../../node_modules/@angular/forms';
import { Input } from '@angular/core';

@Component({
  selector: 'app-oefening-overzicht',
  templateUrl: './oefening-overzicht.component.html',
  styleUrls: ['./oefening-overzicht.component.css']
})
export class OefeningOverzichtComponent implements OnInit {

  @Input() _oefening: Oefening;
  private _oefeningenLijst: Array<Oefening>;
  private _gefilterdeLijst: Array<Oefening>;
  private _disableNaam = true;
  private _disableBeschrijving = true;

  constructor(private _oefDataService: OefeningDataService) {
    this._oefeningenLijst = this._oefDataService.oefeningen;
    this._gefilterdeLijst = this._oefeningenLijst;
  }

  ngOnInit() {
  }

  /**
   * 
   * @param naam Dit is de naam van de oefening die zal worden toegevoegd in de databank
   * @param beschrijving Dit is de beschrijving van de oefening die zal worden toegevoegd in de databank
   */
  onSubmit(naam: string, beschrijving: string) {
    console.log('Je hebt gesubmit');
    const oefening = new Oefening(naam, beschrijving, 6);
    this._oefDataService.voegNieuweOefeningToe(oefening);
  }

  /**
   * 
   * @param naam Dit is de nieuwe naam van de oefening
   * @param beschrijving Dit is de nieuwe beschrijving van de oefening
   * @param id Dit is het oefeningId van de oefening die zal worden aangepast
   */
  bewerkOefening(naam: string, beschrijving: string, id: number) {
    this._oefDataService.bewerkOef(naam, beschrijving, id);
    this.disableInputs();
   }

   /**
    * 
    * @param id Dit is het oefeningId van de oefening die zal worden verwijderd
    */
   verwijderOefening(id: number) {
     this._oefDataService.verwijderOef(id);
   }

   /**
    * 
    * @param zoekwoord Dit is het stukje tekst waarop gefilterd zal worden
    */
  zoeken(zoekwoord: string) {
    if(zoekwoord != undefined && zoekwoord.trim().length !== 0) {
      console.log(zoekwoord);
      this._gefilterdeLijst = this._oefeningenLijst.filter(s => s.naam.includes(zoekwoord) || s.beschrijving.includes(zoekwoord));
      console.log(this._gefilterdeLijst);
      console.log('je zit in eerste');
    } else {
      this._gefilterdeLijst = this._oefeningenLijst;
      console.log(this._gefilterdeLijst);
      console.log('je zit in tweede');
    }
  }

  /**
   * Geeft een lijst van gefilterde oefeningen terug
   */
  get oefeningen() {
    return this._gefilterdeLijst;
  }

  /**
   * 
   * @param oefening Dit is de oefening waarvan men de info wilt zien
   */
  toonOefeningInfo(oefening: Oefening) {
    console.log(oefening);
    this._oefening = oefening;
    return this._oefening;
  }

  /**
   * Disabled de naam en beschrijving voor een oefening aan te passen
   */
  disableInputs() {
    this._disableNaam = true;
    this._disableBeschrijving = true;
  }

  switchDisableNaam() {
    this._disableNaam = ! this._disableNaam;
  }

  switchDisableBeschrijving() {
    this._disableBeschrijving = ! this._disableBeschrijving;
  }
}
