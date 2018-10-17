import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule,
   MatToolbarModule, MatIconModule, MatListModule, MatCardModule,
   MatGridListModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { OefeningComponent } from './oefening/oefening.component';
import { SessieComponent } from './sessie/sessie.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { OefeningenLijstComponent } from './oefeningen-lijst/oefeningen-lijst.component';
import { SessieLijstComponent } from './sessie-lijst/sessie-lijst.component';

@NgModule({
  declarations: [
    AppComponent,
    OefeningComponent,
    SessieComponent,
    MainNavComponent,
    OefeningenLijstComponent,
    SessieLijstComponent
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
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
