import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

import { TituloService } from 'src/app/servicios/titulo.service';
import { TituloEditarComponent } from '../titulo-editar/titulo-editar.component';

import { EmpresaService } from 'src/app/servicios/empresa.service';
import { HttpErrorResponse } from '@angular/common/http';

import { Titulo } from 'src/app/entidades/titulo';
import { Empresa } from 'src/app/entidades/Empresa';
import { Pais } from 'src/app/entidades/pais';
import { DecidirComponent } from 'src/app/componentes/decidir/decidir.component';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {

  public textoBusqueda: string = "";
  public titulos: Titulo[] = [];
  public empresas: Empresa[] = [];
  public tituloSeleccion: Titulo | undefined;

  public columnas = [
    { name: 'Nombre', prop: 'nombre' },
    { name: 'Año Pub.', prop: 'año' },
    { name: 'Protagonistas', prop: 'protagonistas' },
    { name: 'Productor', prop: 'productor' },
    { name: 'Director', prop: 'director' },
    { name: 'Empresa', prop: 'empresa.nombre' },
    { name: 'Precio', prop: 'precio' },
  ];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;


  public constructor(private tituloService: TituloService,
    private empresaService: EmpresaService,
    private router: Router,
    public dialog: MatDialog,) {

  }

  ngOnInit(): void {
    this.listar();
    this.listarEmpresas();
  }

  public onActivate(event: any) {
    if (event.type == 'click') {
      this.tituloSeleccion = event.row;
    }
  }

  public listar() {
    this.tituloService.listar()
      .subscribe(data => {
        this.titulos = data;

        this.titulos.forEach(titulo => {
          titulo.ano = titulo.año;
        });

      },
        error => {
          window.alert(error.message)
        });
  }

  public listarEmpresas() {
    this.empresaService.listar()
      .subscribe(data => {
        this.empresas = data;
      },
        error => {
          window.alert(error.message)
        });
  }

  public buscar() {
    if (this.textoBusqueda.length > 0) {
      this.tituloService.buscar(this.textoBusqueda)
        .subscribe(data => {
          this.titulos = data;
        },
          error => {
            window.alert(error.message)
          });
    }
    else {
      this.listar();
    }
  }

  public agregar() {
    const dialogRef = this.dialog.open(TituloEditarComponent, {
      width: '600px',
      height: '500px',
      data: {
        encabezado: `Agregando nuevo Título de Videojuego`,
        titulo: new Titulo(0, "", 0, "", "", "", new Empresa(0, "", new Pais(0, "", "", "")), 0),
        empresas: this.empresas,
      }
    });

    dialogRef.afterClosed().subscribe((datos) => {
      if (datos) {
        this.guardar(datos.titulo);
      }
    }, error => {
      window.alert(error.message)
    }
    );
  }

  public modificar() {
    if (this.tituloSeleccion != null && this.tituloSeleccion.id >= 0) {
      const dialogRef = this.dialog.open(TituloEditarComponent, {
        width: '600px',
        height: '500px',
        data: {
          encabezado: `Editando a datos del título [${this.tituloSeleccion.nombre}]`,
          titulo: this.tituloSeleccion,
          empresas: this.empresas,
        }
      });

      dialogRef.afterClosed().subscribe((datos) => {
        if (datos) {
          this.guardar(datos.titulo);
        }
      }, error => {
        window.alert(error.message)
      }
      );

    }
    else {
      window.alert("Debe seleccionar un Título");
    }
  }

  private guardar(titulo: Titulo) {
    titulo.año = titulo.ano;
    if (titulo.id == 0) {
      this.tituloService.agregar(titulo).subscribe(tituloActualizado => {
        this.listar();
        window.alert("Los datos del Título de Videojuego fueron agregados");
      },
        (error: HttpErrorResponse) => {
          window.alert(`Error agregando el Título de Videojuego: [${error.message}]`);
        });
    }
    else {
      this.tituloService.actualizar(titulo).subscribe(tituloActualizado => {
        this.listar();
        window.alert("Los datos del Título de Videojuego fueron actualizados");
      },
        (error: HttpErrorResponse) => {
          window.alert(`Error actualizando Título de Videojuego: [${error.message}]`);
        });
    }
  }

  public verificarEliminar() {
    if (this.tituloSeleccion != null && this.tituloSeleccion.id >= 0) {
      const dialogRef = this.dialog.open(DecidirComponent, {
        width: '400px',
        height: '200px',
        data: {
          titulo: `Eliminando registro del título [${this.tituloSeleccion.nombre}]`,
          mensaje: "Está seguro?",
          id: this.tituloSeleccion.id,
        }
      });

      dialogRef.afterClosed().subscribe(datos => {
        if (datos) {
          this.eliminar(datos.id);
        }
      },
        error => {
          window.alert(error.message)
        });

    }
    else {
      window.alert("Debe seleccionar un Título");
    }
  }

  private eliminar(id: number) {
    this.tituloService.eliminar(id).subscribe(response => {
      if (response == true) {
        this.listar();
        window.alert("El registro del Título de Videojuego fue eliminado");
      }
      else {
        window.alert("No se pudo eliminar el registro del Título de Videojuego");
      }
    },
      erroror => {
        window.alert(erroror.message)
      }
    );
  }

}
