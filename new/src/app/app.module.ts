import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { MatButtonToggleModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { SessieLijstComponent } from './sessie-lijst/sessie-lijst.component';
import { SessieComponent } from './sessie/sessie.component';
import { OefeningComponent } from './oefening/oefening.component';
import { OefeningEmptyComponent } from './oefening-empty/oefening-empty.component';
import { OefeningDataService } from './oefening-data.service';
import { SessieDataService } from './sessie-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessieEmptyComponent } from './sessie-empty/sessie-empty.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseAndroidConfig } from 'src/environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RegistrerenComponent } from './registreren/registreren.component';
import * as firebase from 'firebase';
import { GebruikersComponent } from './gebruikers/gebruikers.component';


/** test@test.com   123456 */


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SessieLijstComponent,
    SessieComponent,
    OefeningComponent,
    OefeningEmptyComponent,
    SessieEmptyComponent,
    LoginComponent,
    RegistrerenComponent,
    GebruikersComponent,
  ],
  entryComponents: [OefeningComponent, OefeningEmptyComponent, SessieEmptyComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseAndroidConfig, 'angular'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [ AuthenticationService, AuthGuardService, OefeningDataService, SessieDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
