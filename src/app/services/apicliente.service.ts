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

@Injectable({
  providedIn: 'root',
})
export class ApiclienteService {
  url: string = 'https://localhost:44315/api/Cliente';

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

