import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sessie',
  templateUrl: './sessie.component.html',
  styleUrls: ['./sessie.component.css']
})
export class SessieComponent implements OnInit {

  @Input() name: string;


  constructor() { }

  ngOnInit() {
  }

}
