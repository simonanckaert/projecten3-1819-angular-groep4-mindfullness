import { Component, OnInit } from '@angular/core';
import { OefeningDataService } from '../oefening-data.service';

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

}
