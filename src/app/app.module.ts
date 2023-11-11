import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EmpresasModule } from './componentes/empresas/empresas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TitulosModule } from './componentes/titulos/titulos.module';
import { DecidirComponent } from './componentes/decidir/decidir.component';
import { ReferenciasMaterialModule } from './referencias-material.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DecidirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmpresasModule,
    TitulosModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReferenciasMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
