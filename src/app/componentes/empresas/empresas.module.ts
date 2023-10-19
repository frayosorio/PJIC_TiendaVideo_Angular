import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from './paginas/empresas/empresas.component';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { ReferenciasMaterialModule } from 'src/app/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [
    EmpresasComponent
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
