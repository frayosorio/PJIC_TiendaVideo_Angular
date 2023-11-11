import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TiendaVideo';

  public opciones = [
    { titulo: "Paises", url: "paises", icono: "assets/iconos/Pais.png" },
    { titulo: "Empresas", url: "empresas", icono: "assets/iconos/Empresa.png" },
    { titulo: "Titulos", url: "titulos", icono: "assets/iconos/Titulo.png" }
  ];


}
