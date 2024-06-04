import { Component } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';
import { MatTableModule } from '@angular/material/table';
import { DialogClienteComponent } from './dialog/dialogcliente.component';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';






@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [
    MatTableModule,
    DialogClienteComponent,
    FormsModule,
  ],

  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {

  public lst!: any[];
  public columnas: string[] = ['id', 'nombre'];
  
  constructor(
    private apiCliente: ApiclienteService,
    public dialog: MatDialog,
  ) {
  }
  ngOnInit(): void {
    this.getClientes();
  }
  getClientes(){
    this.apiCliente.getClientes().subscribe( response => {
      this.lst = response.data;
    });
  
  }
  openAdd(){
    const dialogRef = this.dialog.open(DialogClienteComponent,{
      width: '1300'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getClientes();
    });
  }
}
