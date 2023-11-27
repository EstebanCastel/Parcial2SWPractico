import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Conferencia } from '../conferencia.model';
import { ConferenciasService } from '../conferencia.service';

@Component({
  selector: 'app-conferencia-detalle',
  templateUrl: './conferencia-detalle.component.html',
  styleUrls: ['./conferencia-detalle.component.css']
})
export class ConferenciaDetalleComponent implements OnInit, OnChanges {
  @Input() conferenciaId?: number;
  conferencia?: Conferencia;

  constructor(private conferenciasService: ConferenciasService) {}

  ngOnInit(): void {
    this.loadConferencia();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['conferenciaId'] && changes['conferenciaId'].currentValue !== undefined) {
      this.loadConferencia();
    }
  }

  private loadConferencia(): void {
    if (this.conferenciaId !== undefined) {
      this.conferenciasService.getConferencias().subscribe((conferencias) => {
        this.conferencia = conferencias.find(c => c.id === this.conferenciaId);
      });
    }
  }
}
