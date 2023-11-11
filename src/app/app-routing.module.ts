import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  { path: "inicio", component: InicioComponent },
  { path: "empresas", loadChildren: () => import("./componentes/empresas/empresas.module").then(x => x.EmpresasModule) },
  { path: "titulos", loadChildren: () => import("./componentes/titulos/titulos.module").then(x => x.TitulosModule) },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
