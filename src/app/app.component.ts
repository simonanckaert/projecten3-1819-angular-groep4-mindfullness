import { Component } from '@angular/core';
import { OefeningDataService } from './oefening-data.service';
import { KlantDataService } from './klant-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OefeningDataService, KlantDataService]
})
export class AppComponent {
}
