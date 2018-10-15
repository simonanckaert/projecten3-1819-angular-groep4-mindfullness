import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule} from '@angular/material';


import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OefeningComponent } from './oefening/oefening.component';
import { SessieComponent } from './sessie/sessie.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BerichtenComponent } from './berichten/berichten.component';

const appRoutes: Routes = [
  { path: '', component: OefeningComponent },
  { path: 'berichten', component: BerichtenComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OefeningComponent,
    SessieComponent,
    MainNavComponent,
    PagenotfoundComponent,
    BerichtenComponent
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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
