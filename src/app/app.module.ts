import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OefeningComponent } from './oefening/oefening.component';
import { SessieComponent } from './sessie/sessie.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { OefeningenLijstComponent } from './oefeningen-lijst/oefeningen-lijst.component';
import { SessieLijstComponent } from './sessie-lijst/sessie-lijst.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BerichtenComponent } from './berichten/berichten.component';
import { SessieoverzichtComponent } from './sessieoverzicht/sessieoverzicht.component';
import { KlantComponent } from './klant/klant.component';
import { KlantenLijstComponent } from './klanten-lijst/klanten-lijst.component';
import { HomeComponent } from './home/home.component';
import { OefeningOverzichtComponent } from './oefening-overzicht/oefening-overzicht.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { RegistrerenComponent } from './registreren/registreren.component';

export const firebaseConfig = {
  apiKey: "AIzaSyB1wU05Yb-p-0hu98hq2agU2dk_7XHF7Zo",
  authDomain: "projecten3-angular.firebaseapp.com",
  databaseURL: "https://projecten3-angular.firebaseio.com",
  projectId: "projecten3-angular",
  storageBucket: "projecten3-angular.appspot.com",
  messagingSenderId: "378320525386"

};



const appRoutes: Routes = [
  { path: '', component: RegistrerenComponent },
  { path: 'berichten', component: BerichtenComponent },
  { path: 'sessieoverzicht', component: SessieoverzichtComponent },
  { path: 'klanten', component: KlantenLijstComponent},
  { path: 'oefeningen', component: OefeningOverzichtComponent },
  { path: '**', component: PagenotfoundComponent },
  { path: 'registreren', component: RegistrerenComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OefeningComponent,
    SessieComponent,
    MainNavComponent,
    OefeningenLijstComponent,
    SessieLijstComponent,
    PagenotfoundComponent,
    BerichtenComponent,
    SessieoverzichtComponent,
    KlantComponent,
    KlantenLijstComponent,
    HomeComponent,
    OefeningOverzichtComponent,
    LoginComponent,
    EmailComponent,
    RegistrerenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ReactiveFormsModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
