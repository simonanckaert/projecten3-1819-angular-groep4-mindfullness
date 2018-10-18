import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule,
   MatToolbarModule, MatIconModule, MatListModule, MatCardModule,
   MatGridListModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OefeningComponent } from './oefening/oefening.component';
import { SessieComponent } from './sessie/sessie.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { OefeningenLijstComponent } from './oefeningen-lijst/oefeningen-lijst.component';
import { SessieLijstComponent } from './sessie-lijst/sessie-lijst.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BerichtenComponent } from './berichten/berichten.component';
import { SessieoverzichtComponent } from './sessieoverzicht/sessieoverzicht.component';
import { KlantComponent } from './klant/klant.component';
import { KlantenLijstComponent } from './klanten-lijst/klanten-lijst.component';

const appRoutes: Routes = [
  { path: '', component: OefeningComponent },
  { path: 'berichten', component: BerichtenComponent },
  { path: 'sessieoverzicht', component: SessieoverzichtComponent },
  { path: 'klanten', component: KlantenLijstComponent},
  { path: '**', component: PagenotfoundComponent }
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
    KlantenLijstComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
