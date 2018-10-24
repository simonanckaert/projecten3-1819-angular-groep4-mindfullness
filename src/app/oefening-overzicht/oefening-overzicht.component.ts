import { Component, OnInit } from '@angular/core';
import { OefeningDataService } from '../oefening-data.service';
import { Oefening } from '../oefening/oefening.model';
import { FormGroup } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-oefening-overzicht',
  templateUrl: './oefening-overzicht.component.html',
  styleUrls: ['./oefening-overzicht.component.css']
})
export class OefeningOverzichtComponent implements OnInit {

  constructor(private _oefDataService: OefeningDataService) { }

  ngOnInit() {
  }

  get oefeningen() {
    return this._oefDataService.oefeningen;
  }

  onSubmit() {
    console.log('Je hebt gesubmit');
    const oefening = new Oefening('test', 'test');
    this._oefDataService.voegNieuweOefeningToe(oefening);
  }
}
