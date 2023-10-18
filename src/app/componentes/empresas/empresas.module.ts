import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from './paginas/empresas/empresas.component';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { ReferenciasMaterialModule } from 'src/app/referencias-material.module';



@NgModule({
  declarations: [
    EmpresasComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    ReferenciasMaterialModule,
    
  ]
})
export class EmpresasModule { }
