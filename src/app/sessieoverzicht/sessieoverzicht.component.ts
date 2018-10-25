import { Component, OnInit, Testability } from '@angular/core';
import { SessieDataService } from '../sessie-data.service';
import { Sessie } from '../sessie/sessie.model';
import { Input } from '@angular/core';
import { Oefening } from '../oefening/oefening.model';

@Component({
  selector: 'app-sessieoverzicht',
  templateUrl: './sessieoverzicht.component.html',
  styleUrls: ['./sessieoverzicht.component.css']
})
export class SessieoverzichtComponent implements OnInit {

  @Input() _sessie: Sessie;
  private _oefeningen: Oefening[];

  constructor(private _sessieDataService: SessieDataService) {
    /*this._sessie = this._sessieDataService.sessies[0];
    this._oefeningen = this._sessie.oefeningen;*/
   }

  ngOnInit() {
  }

  get sessies(): Sessie[] {
    return this._sessieDataService.sessies;
  }

  toonSessieInfo(sessie: Sessie): Sessie {
    console.log(sessie);
    this._sessie = sessie;
    this._oefeningen = this._sessie.oefeningen;
    return this._sessie;
  }

  sessieGekozen(): boolean {
    if (this._sessie != null) {
      return true;
    }
    return false;
  }

  get oefeningen() {
    return this._oefeningen;
  }

  voegSessieToe(naam: string, beschrijving: string) {
    console.log('Sessie toegevoegd' + naam +  ' ' + beschrijving + ' ' + this._sessieDataService.sessies.length);
    this._sessieDataService.voegNieuweSessieToe(new Sessie(naam, beschrijving, null, this._sessieDataService.sessies.length));
  }

  bewerkSessie(naam: string, beschrijving: string, id: number) {
    console.log('Sessie te bewerken ' + naam + beschrijving);
    console.log(id);
    this._sessieDataService.bewerkSessie(naam, beschrijving, id);
    console.log('Sessie bewerkt ' + this._sessieDataService.sessies[0].naam + beschrijving);
  }
}
