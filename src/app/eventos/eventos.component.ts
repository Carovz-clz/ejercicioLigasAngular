import { Component, OnInit } from '@angular/core';
import { Evento } from '../shared/evento.model';
import { ObtencionDatosService } from '../shared/obtencion-datos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  arrayEventos: Evento[];

  constructor(private obDatosService: ObtencionDatosService) { }

  ngOnInit(): void {
    this.arrayEventos = this.obDatosService.obtenerEventos();
  }

}
