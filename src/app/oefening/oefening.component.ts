import { Component, OnInit, Input} from '@angular/core';
import { Oefening } from './oefening.model';

@Component({
  selector: 'app-oefening',
  templateUrl: './oefening.component.html',
  styleUrls: ['./oefening.component.css']
})
export class OefeningComponent implements OnInit {
  @Input() public oefening: Oefening;

  constructor() {
   }

  ngOnInit() {
  }

  verwijderOefeningUitSessie() {
    if (confirm('Ben je zeker dat je ' + this.oefening.naam + ' wilt verwijderen?')) {
      console.log(this.oefening.naam + ' is verwijderd uit de sessie');
    }
  }
}
