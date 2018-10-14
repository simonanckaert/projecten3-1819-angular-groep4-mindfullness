import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oefening',
  templateUrl: './oefening.component.html',
  styleUrls: ['./oefening.component.css']
})
export class OefeningComponent implements OnInit {

  name: string;
  delen: string[];

  constructor() {
    this.name = 'eerste oefening';
    this.delen = ['deel 1', 'deel 2', 'deel 3'];
   }

  ngOnInit() {
  }

}
