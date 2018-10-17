import { Component } from '@angular/core';
import { Oefening } from './oefening/oefening.model';
import { OefeningDataService } from './oefening-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OefeningDataService]
})
export class AppComponent {
}
