import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import { Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from "rxjs/operators";
 
@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {
  constructor(private http: HttpClient) {
  }
  /*
  Modo de comunicación con el servidor asíncrono
  parametro token: string
  return Observable<any>
   */
  getTokenClientModule(token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
      return this.http.post<any>( '6Ldw4_ApAAAAAPdW5fVe9OO1HxKntf5-AWY7EoxY' + token +'/', httpOptions)
        .pipe(
          map((response) => response),
          catchError((err) => {
            console.log('error caught in service')
            console.error(err);
            return throwError(err);
          })
        );
  }
}