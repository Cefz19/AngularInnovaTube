import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class YoutubeService {

    private url:string = '';
    private api_key : string = '';
    private canal:string = '';
    constructor(private _http:HttpClient) {}

    obtenerVideos() {
        const parametros = new HttpParams().set('part', 'anippet').set('channelId', this.canal).set('maxResult', '10').set('key', this.api_key);
        let vinculo = `${this.url}/search`;
        return this._http.get(vinculo,{params: parametros}).pipe(map(resp => resp));
    }
}