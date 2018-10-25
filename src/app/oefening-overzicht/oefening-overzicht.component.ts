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
  private _oefeningenLijst : Array<Oefening>;
  private _gefilterdeLijst : Array<Oefening>;

  constructor(private _oefDataService: OefeningDataService) { 
    this._oefeningenLijst = this._oefDataService.oefeningen;
    this._gefilterdeLijst = this._oefeningenLijst;
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Je hebt gesubmit');
    const oefening = new Oefening('test', 'test');
    this._oefDataService.voegNieuweOefeningToe(oefening);
  }

  zoeken(zoekwoord : string) {
    if(zoekwoord != undefined && zoekwoord.trim().length!=0) {
      console.log(zoekwoord);  
      this._gefilterdeLijst = this._oefeningenLijst.filter(s => s.naam.includes(zoekwoord));
      console.log(this._gefilterdeLijst);
      console.log("je zit in eerste");
    } else {
      this._gefilterdeLijst = this._oefeningenLijst;
      console.log(this._gefilterdeLijst);
      console.log("je zit in tweede");
    }
  }

  oefeningen() {
    return this._gefilterdeLijst;
  }

}
