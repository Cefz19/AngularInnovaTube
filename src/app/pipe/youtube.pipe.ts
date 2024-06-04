import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'youtube'
})

export class YoutubePipe implements PipeTransform {
    
    constructor(private _dom: DomSanitizer) {}

    transform(value: string) : any {
        let url = '';
        return this._dom.bypassSecurityTrustResourceUrl(url+value);
    }
}