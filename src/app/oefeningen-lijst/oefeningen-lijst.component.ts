import { Component, OnInit } from '@angular/core';
import { Oefening } from '../oefening/oefening.model';
import { OefeningDataService } from '../oefening-data.service';

@Component({
  selector: 'app-oefeningen-lijst',
  templateUrl: './oefeningen-lijst.component.html',
  styleUrls: ['./oefeningen-lijst.component.css']
})
export class OefeningenLijstComponent implements OnInit {

  constructor(private _oefeningDataService: OefeningDataService) {
  }

  ngOnInit() {
  }

  get oefeningen(): Oefening[] {
    return this._oefeningDataService.oefeningen;
  }

  voegOefeningToe(oefening) {
    this._oefeningDataService.voegNieuweOefeningToe(oefening);
  }
}
