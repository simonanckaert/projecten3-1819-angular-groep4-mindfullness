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

  /**
   * Geeft een lijst van sessies terug
   */
  get sessies(): Sessie[] {
    this._sessieDataService.herlaadSessies();
    return this._sessieDataService.sessies;
  }

  /**
   * 
   * @param sessie dit is de sessie die u wilt zien
   */
  toonSessieInfo(sessie: Sessie): Sessie {
    console.log(sessie);
    this._sessie = sessie;
    this._oefeningen = this._sessie.oefeningen;
    return this._sessie;
  }

  /**
   * Geeft weer of er een sessie gekozen is of niet
   */
  sessieGekozen(): boolean {
    if (this._sessie != null) {
      return true;
    }
    return false;
  }

  /**
   * Geeft een lijst van oefeningen terug
   */
  get oefeningen() {
    return this._oefeningen;
  }

  /**
   * 
   * @param naam dit is de naam van een sessie die wordt toegevoegd
   * @param beschrijving dit is de beschrijving van een sessie die wordt toegevoegd
   */
  voegSessieToe(naam: string, beschrijving: string) {
    console.log('Sessie toegevoegd' + naam +  ' ' + beschrijving + ' ' + this._sessieDataService.sessies.length);
    this._sessieDataService.voegNieuweSessieToe(new Sessie(naam, beschrijving, null, this._sessieDataService.sessies.length));
  }

  /**
   * 
   * @param naam dit is de nieuwe naam van de sessie
   * @param beschrijving dit is de nieuwe beschrijving van de sessie
   * @param id dit is het sessieId van de sessie die bewerkt gaat worden
   */
  bewerkSessie(naam: string, beschrijving: string, id: number) {
    console.log('Sessie te bewerken ' + naam + beschrijving);
    console.log(id);
    this._sessieDataService.bewerkSessie(naam, beschrijving, id);
    console.log('Sessie bewerkt ' + this._sessieDataService.sessies[0].naam + beschrijving);
  }
}
