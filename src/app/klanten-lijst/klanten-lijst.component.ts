import { Component, OnInit } from '@angular/core';
import { KlantDataService } from '../klant-data.service';
import { Klant } from '../klant/klant.model';

@Component({
  selector: 'app-klanten-lijst',
  templateUrl: './klanten-lijst.component.html',
  styleUrls: ['./klanten-lijst.component.css']
})
export class KlantenLijstComponent implements OnInit {

  constructor(private _klantenDataService : KlantDataService) { }

  ngOnInit() {
  }

  get klanten() : Klant[] {
    console.log(this._klantenDataService.klanten);
    return this._klantenDataService.klanten;
  }

  veranderen(klant: Klant) {
    console.log("hallo");
    this._klantenDataService.klanten.find(k => k.id === klant.id).geblokkeerd();
    //location.reload();
  }

}
