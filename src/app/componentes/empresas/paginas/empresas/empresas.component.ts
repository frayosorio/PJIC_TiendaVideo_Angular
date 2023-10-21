import { Component, OnInit } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Empresa } from 'src/app/entidades/Empresa';
import { EmpresaService } from 'src/app/servicios/empresa.service';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  public textoBusqueda: string = "";
  public empresas: Empresa[] = [];
  public columnas = [
    { name: 'Nombre', prop: 'nombre' },
    { name: 'Codigo', prop: 'id' },
    { name: 'País', prop: 'pais.pais' },
  ];
  public tipoSeleccion = SelectionType;
  public modoColumna = ColumnMode;

  constructor(
    private empresaService: EmpresaService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.empresaService.listar().subscribe(
      respuesta => {
        this.empresas = respuesta;
      }
    );
  }

  public buscar() {

  }

  public agregar() {

  }

  public modificar() {

  }

  public verificarEliminar() {

  }

  public onActivate(event: any) {

  }

}
