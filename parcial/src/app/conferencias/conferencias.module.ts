import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaConferenciasComponent } from './lista-conferencias/lista-conferencias.component';
import { ConferenciaDetalleComponent } from './conferencia-detalle/conferencia-detalle.component';



@NgModule({
  declarations: [
    ListaConferenciasComponent,
    ConferenciaDetalleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConferenciasModule { }
