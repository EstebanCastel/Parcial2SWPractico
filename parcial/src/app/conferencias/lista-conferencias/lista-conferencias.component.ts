import { Component, OnInit } from '@angular/core';
import { ConferenciasService } from '../conferencia.service';
import { Conferencia } from '../conferencia.model';

@Component({
  selector: 'app-lista-conferencias',
  templateUrl: './lista-conferencias.component.html',
  styleUrls: ['./lista-conferencias.component.css']
})
export class ListaConferenciasComponent implements OnInit {
  conferencias: Conferencia[] = [];
  conferenciasFuturas: number = 0;
  selectedConferenciaId?: number;

  constructor(private conferenciasService: ConferenciasService) {}

  ngOnInit(): void {
    this.conferenciasService.getConferencias().subscribe((conferencias) => {
      const currentDate = new Date();
      this.conferencias = conferencias;
      this.conferenciasFuturas = conferencias.filter(conferencia => 
        new Date(conferencia.starts) > currentDate
      ).length;
    });
  }

  onSelected(id: number): void {
    this.selectedConferenciaId = id;
  }
}
