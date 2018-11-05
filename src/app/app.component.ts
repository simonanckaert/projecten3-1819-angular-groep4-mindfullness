import { Component } from '@angular/core';
import { OefeningDataService } from './oefening-data.service';
import { KlantDataService } from './klant-data.service';
import { SessieDataService } from './sessie-data.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OefeningDataService, SessieDataService, KlantDataService]
})
export class AppComponent {
}
