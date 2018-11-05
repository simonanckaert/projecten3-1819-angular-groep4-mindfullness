import { Component, OnInit } from '@angular/core';
import { KlantDataService } from '../klant-data.service';
import { Klant } from '../klant/klant.model';

@Component({
  selector: 'app-klanten-lijst',
  templateUrl: './klanten-lijst.component.html',
  styleUrls: ['./klanten-lijst.component.css']
})
export class KlantenLijstComponent implements OnInit {

  constructor(private _klantenDataService: KlantDataService) { }

  ngOnInit() {
  }

  get klanten(): Klant[] {
    return this._klantenDataService.klanten;
  }
}
