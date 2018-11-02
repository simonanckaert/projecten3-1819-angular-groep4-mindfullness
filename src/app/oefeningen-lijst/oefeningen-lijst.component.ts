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

  /**
   * Geeft een lijst van oefeningen terug uit de databank
   */
  get oefeningen(): Oefening[] {
    return this._oefeningDataService.oefeningen;
  }

  /**
   * Voegt een oefening toe aan de databank
   * @param oefening Dit is een oefening die zal worden toegevoegd in de databank
   */
  voegOefeningToe(oefening, file : File) {
    this._oefeningDataService.voegNieuweOefeningToe(oefening, file);
  }
}
