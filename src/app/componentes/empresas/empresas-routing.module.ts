import { RouterModule, Routes } from "@angular/router";
import { EmpresasComponent } from "./paginas/empresas/empresas.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: "", component: EmpresasComponent },

  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EmpresasRoutingModule { }
  