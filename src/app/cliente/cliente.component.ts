import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiclienteService } from '../services/apicliente.service';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MaterialModule } from '../modules/material/material.module';

import { Response } from '../models/response';


@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [
    CommonModule,
    YouTubePlayerModule,
    MaterialModule

  ],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent implements OnInit {

  videos = [
    {
      video: 'xoRjRg_FeYc'
    }
    
  ];

 public lst: any[] = [];
 public columnas: string[] = ['id', 'nombre']

  constructor(private apiCliente: ApiclienteService ) {

  }
  ngOnInit(): void {
    this.getCliente();
  }
  getCliente(){
    this.apiCliente.getClientes().subscribe( response => {
      this.lst = response.data;
    }
  )}

}
