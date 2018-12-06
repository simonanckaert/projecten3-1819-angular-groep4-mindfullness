import { Injectable } from '@angular/core';
import { Sessie } from './sessie/sessie.model';
import { Oefening } from './oefening/oefening.model';
import * as globals from '../globals/globals';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessieDataService {
  constructor(private http: HttpClient) {}

  getSessies(): Observable<Sessie[]> {
    return this.http.get<Sessie[]>(globals.backendUrl + `/sessies`).pipe();
  }

  getSessie(sessieId: number): Observable<Sessie> {
    return this.http
      .get<Sessie>(globals.backendUrl + `/sessies/` + sessieId)
      .pipe();
  }

  voegNieuweSessieToe(sessie: Sessie): Observable<Sessie> {
    const fd = new FormData();
    fd.append('naam', sessie.naam);
    fd.append('beschrijving', sessie.beschrijving);

    return this.http
      .post<Sessie>(globals.backendUrl + `/sessies`, fd)
      .pipe();
  }

  verwijderSessie(sessie: Sessie) {
    return this.http
      .delete(globals.backendUrl + '/sessies/' + sessie.sessieId)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }

  updateSessie(sessie: Sessie) {
    return this.http
      .put<Sessie>(globals.backendUrl + `/sessies`, sessie)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }
}
