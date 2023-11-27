import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaConferenciasComponent } from './conferencias/lista-conferencias/lista-conferencias.component';
import { ConferenciaDetalleComponent } from './conferencias/conferencia-detalle/conferencia-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaConferenciasComponent,
    ConferenciaDetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
