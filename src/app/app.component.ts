import { Component } from '@angular/core';
import { OefeningDataService } from './oefening-data.service';
import { KlantDataService } from './klant-data.service';
import { SessieDataService } from './sessie-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OefeningDataService, SessieDataService, KlantDataService]
})
export class AppComponent {
}
