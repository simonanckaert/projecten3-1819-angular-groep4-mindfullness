import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SessieLijstComponent } from './sessie-lijst/sessie-lijst.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', canActivate: [AuthGuardService], component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sessies', canActivate: [AuthGuardService], component: SessieLijstComponent },
  { path: '**', canActivate: [AuthGuardService], component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
