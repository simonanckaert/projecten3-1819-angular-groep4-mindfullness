import { Component, OnInit } from '@angular/core';
import { SessieDataService } from '../sessie-data.service';

@Component({
  selector: 'app-sessieoverzicht',
  templateUrl: './sessieoverzicht.component.html',
  styleUrls: ['./sessieoverzicht.component.css']
})
export class SessieoverzichtComponent implements OnInit {

  constructor(private _sessieDataService: SessieDataService) {
   }

  ngOnInit() {
  }

}
