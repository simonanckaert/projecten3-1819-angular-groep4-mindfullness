import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as globals from '../globals/globals';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class GebruikerDataService {

  headers: Headers;
  options: RequestOptions;

  constructor(private http: HttpClient) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(globals.backendUrl + `/users`);
  }

  getUserById(uid: string): Observable<any> {
    return this.http.get<any[]>(globals.backendUrl + `/users/` + uid);
  }

  /** NOT WORKING! */
  updateUser(uid: string, user): Observable<any> {
    console.log(globals.backendUrl + `/users/` + uid, user);
    const url = globals.backendUrl + `/users/` + uid;
    const body = JSON.stringify(user);
    return this.http
        .put(url, body,  { headers: new HttpHeaders({'Content-Type': 'application/json'}) })
        .map(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body;
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
