import { Component, OnInit, Input} from '@angular/core';
import { Oefening } from './oefening.model';
import { OefeningDataService } from '../oefening-data.service';

@Component({
  selector: 'app-oefening',
  templateUrl: './oefening.component.html',
  styleUrls: ['./oefening.component.css']
})
export class OefeningComponent implements OnInit {
  @Input() public oefening: Oefening;

  constructor(private _oefeningDataService: OefeningDataService) {
   }

  ngOnInit() {
  }

  verwijderOefeningUitSessie() {
    if (confirm('Ben je zeker dat je ' + this.oefening.naam + ' wilt verwijderen?')) {
      this._oefeningDataService.verwijderOef(this.oefening.oefeningId);
    }
  }
}
