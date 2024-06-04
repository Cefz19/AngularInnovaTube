import { Component } from '@angular/core';
import { YoutubeService } from '../service/youtube.service';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.scss'
})
export class YoutubeComponent {

  misVideos: any[] = [];
  videoId!: string;

  constructor(private _youtube: YoutubeService) {
    this._youtube.obtenerVideos().subscribe((resp: any) => {
      console.log(resp);
      this.misVideos = resp.items;
    })
  }
  detalleVideo(detalle: string) {
    console.log(detalle);
    this.videoId = detalle;
    $('#exampleModal').modal();
  }
  cerrarModal() {
    this.videoId!;
    $('#exampleModal').modal('hide');
  }
}


  

