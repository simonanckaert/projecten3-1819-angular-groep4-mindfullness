import { Component, OnInit } from '@angular/core';
import { Sessie } from '../sessie/sessie.model';
import { SessieDataService } from '../sessie-data.service';

@Component({
  selector: 'app-sessie-lijst',
  templateUrl: './sessie-lijst.component.html',
  styleUrls: ['./sessie-lijst.component.css']
})
export class SessieLijstComponent implements OnInit {

  constructor(private _sessieDataService: SessieDataService) {
  }

  ngOnInit() {
  }

  get sessies(): Sessie[] {
    return this._sessieDataService.sessies;
  }

  voegSessieToe(sessie) {
    this._sessieDataService.voegNieuweSessieToe(sessie);
  }

}
