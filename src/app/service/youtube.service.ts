import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class YoutubeService {
/**Consumos del la api desde https://console.cloud.google.com*/

/**Consumos del la api desde https://develorper.google.com*/

    private url:string = 'https://www.googleapis.com/youtube/v3/search';
    private api_key : string = 'AIzaSyAxDxpY2QaTVK1Zdyz8cmcWpFf3xvN-EsU';
    private canal:string = 'MMalEsaeqcI?si=hfStovzfZbPBPzYm';
    constructor(private _http:HttpClient) {}

    obtenerVideos() {
        const parametros = new HttpParams().set('part', 'anippet').set('channelId', this.canal).set('maxResult', '10').set('key', this.api_key);
        let vinculo = `${this.url}/search`;
        return this._http.get(vinculo,{params: parametros}).pipe(map(resp => resp));
    }
}