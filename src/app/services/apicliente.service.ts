import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { Cliente } from  '../models/cliente';

const httpOptions = {
  headers: new HttpHeaders ({
    'Contend-Type': 'applicacion/json'
  })
};
/**Inyecion de las dependencias del servico de la api para conectar al cliente*/
@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {
  url: string = 'https://localhost:44310/api/cliente';

  constructor(
    private _http: HttpClient
  ) { }

  getClientes(): Observable<Response> {
    return this._http.get<Response>(this.url);
  }
  add(cliente: Cliente): Observable<Response> {
    return this._http.post<Response>(this.url, cliente, httpOptions);
  }
 }

