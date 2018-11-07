import { Component, OnInit } from '@angular/core';
import { OefeningDataService } from '../oefening-data.service';
import { Oefening } from '../oefening/oefening.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '../../../node_modules/@angular/forms';
import { Input } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-oefening-overzicht',
  templateUrl: './oefening-overzicht.component.html',
  styleUrls: ['./oefening-overzicht.component.css']
})
export class OefeningOverzichtComponent implements OnInit {

  private _oefening: Oefening;
  public errorMsg: string;

  /* @Input() _oefening: Oefening;
  private _oefeningenLijst: Array<Oefening>;
  private _gefilterdeLijst: Array<Oefening>;
  public _disableNaam = true;
  public _disableBeschrijving = true;
  private _file : File;


  constructor(private _oefDataService: OefeningDataService, private route: ActivatedRoute /*private fb: FormBuilder*/) {
   // this._oefeningenLijst = this._oefDataService.oefeningen;
   // this._gefilterdeLijst = this._oefeningenLijst;
  }

  get oefening(): Oefening {
    return this._oefening;
  }


  ngOnInit() {

    this.route.data.subscribe(
      item => (this._oefening = item['oefening']),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
        } while trying to retrieve oefening: ${error.error}`;
      }
    );

    /*this.oef = this.fb.group({
      oefnaam: ['', Validators.required, Validators.minLength(4)],
      oefbeschrijving: ['', Validators.required, Validators.minLength(5)],
      oefbestand: ['', Validators.required],
      oefsessie: ['', Validators.required]
    });*/
  }
  /**
   * Voegt de oefening toe aan de databank
   * @param naam Dit is de naam van de oefening die zal worden toegevoegd in de databank
   * @param beschrijving Dit is de beschrijving van de oefening die zal worden toegevoegd in de databank

  onSubmit(naam: string, beschrijving: string, sessieId: number) {
    const oefening = new Oefening(naam, beschrijving, 0, sessieId);
    this._oefDataService.voegNieuweOefeningToe(oefening, this._file);
  }

  /**
   * Bewerkt de oefening volgens de parameters
   * @param naam Dit is de nieuwe naam van de oefening
   * @param beschrijving Dit is de nieuwe beschrijving van de oefening
   * @param id Dit is het oefeningId van de oefening die zal worden aangepast
  bewerkOefening(naam: string, beschrijving: string, id: number) {
    this._oefDataService.bewerkOef(naam, beschrijving, id);
    this.disableInputs();
   }

   /**
    * verwijdert de meegegeven oefening
    * @param id Dit is het oefeningId van de oefening die zal worden verwijderd
   verwijderOefening(id: number) {
     this._oefDataService.verwijderOef(id);
     console.log('tets')
   }

   /**
    * filtert de oefeninglijst volgens de parameter
    * @param zoekwoord Dit is het stukje tekst waarop gefilterd zal worden

  zoeken(zoekwoord: string) {
    if (zoekwoord !== undefined && zoekwoord.trim().length !== 0) {
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

  get oefeningen() {
    return this._gefilterdeLijst;
  }

  /**
   * Toont de info van geselecteerde oefening
   * @param oefening Dit is de oefening waarvan men de info wilt zien

  toonOefeningInfo(oefening: Oefening) {
    this._oefening = oefening;
    return this._oefening;
  }

  /**
   * Disabled de naam en beschrijving voor een oefening aan te passen

  disableInputs() {
    this._disableNaam = true;
    this._disableBeschrijving = true;
  }

  /**
   * Laat toe om de naam te bewerken

  switchDisableNaam() {
    this._disableNaam = ! this._disableNaam;
  }

  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this._file = file;
    }
  }

  /**
   * Laat toe om de beschrijving te bewerken

  switchDisableBeschrijving() {
    this._disableBeschrijving = ! this._disableBeschrijving;
  }

  toggleGeblokkeerd() {
    this._geblokkeerd = ! this._geblokkeerd;
  }
  */
}
