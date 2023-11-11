import { RouterModule, Routes } from "@angular/router";
import { TitulosComponent } from "./paginas/titulos/titulos.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: "", component: TitulosComponent },

  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TitulosRoutingModule { }