import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitulosComponent } from './paginas/titulos/titulos.component';
import { TitulosRoutingModule } from './titulos-routing.module';
import { ReferenciasMaterialModule } from 'src/app/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TituloEditarComponent } from './paginas/titulo-editar/titulo-editar.component';



@NgModule({
  declarations: [
    TitulosComponent,
    TituloEditarComponent,
  ],
  imports: [
    CommonModule,
    TitulosRoutingModule,
    FormsModule,
    NgxDatatableModule,
    ReferenciasMaterialModule,
  ]
})
export class TitulosModule { }