import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from './paginas/empresas/empresas.component';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { ReferenciasMaterialModule } from 'src/app/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EmpresaEditarComponent } from './paginas/empresa-editar/empresa-editar.component';
import { DecidirComponent } from '../decidir/decidir.component';



@NgModule({
  declarations: [
    EmpresasComponent,
    EmpresaEditarComponent,
    DecidirComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule
  ]
})
export class EmpresasModule { }
