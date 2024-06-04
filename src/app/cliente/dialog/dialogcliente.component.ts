import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { ApiclienteService } from "../../services/apicliente.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Cliente } from "../../models/cliente";


@Component({
    standalone: true,
    templateUrl: 'dialogcliente.component.html',
})

export class DialogClienteComponent {
    constructor(
        public dialogRef:  MatDialogRef<DialogClienteComponent>,
        public apiCliente: ApiclienteService,
        public snackBar: MatSnackBar,
    ) {}

    close() {
        this.dialogRef.close();
    }

    addCliente() {
        const cliente: Cliente = { nombre: 'patito2'};
        this.apiCliente.add(cliente).subscribe(response => {
            if(response.exito === 1) {
                this.dialogRef.close();
                this.snackBar.open('Cliente insertado con exito', '', {
                    duration: 200
                });
            }
        });
    }
}