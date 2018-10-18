import { Component, OnInit } from '@angular/core';
import { Klant } from './klant.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-klant',
  templateUrl: './klant.component.html',
  styleUrls: ['./klant.component.css']
})
export class KlantComponent implements OnInit {
  @Input() public klant: Klant;

  constructor() { }

  ngOnInit() {
  }

}
