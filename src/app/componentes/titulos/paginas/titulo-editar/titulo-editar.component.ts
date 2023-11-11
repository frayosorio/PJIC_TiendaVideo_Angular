import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Empresa } from 'src/app/entidades/Empresa';
import { Titulo } from 'src/app/entidades/titulo';

export interface DatosTitulo {
  encabezado: string;
  titulo: Titulo;
  empresas: Empresa[];
}

@Component({
  selector: 'app-titulo-editar',
  templateUrl: './titulo-editar.component.html',
  styleUrls: ['./titulo-editar.component.css']
})
export class TituloEditarComponent implements OnInit {

  @Input() public dialogRef = MatDialogRef<TituloEditarComponent>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public datos: DatosTitulo
  ) { }

  ngOnInit(): void {
  }

}
