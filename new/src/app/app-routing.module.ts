import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SessieLijstComponent } from './sessie-lijst/sessie-lijst.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegistrerenComponent } from './registreren/registreren.component';
import { GebruikersComponent } from './gebruikers/gebruikers.component';

const appRoutes: Routes = [
  { path: '', canActivate: [AuthGuardService], component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registreren', component: RegistrerenComponent },
  { path: 'sessies', canActivate: [AuthGuardService], component: SessieLijstComponent },
  { path: 'gebruikers', canActivate: [AuthGuardService], component: GebruikersComponent },
  { path: '**', canActivate: [AuthGuardService], component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
