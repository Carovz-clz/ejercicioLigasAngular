import { Component, OnInit } from '@angular/core';
import { Evento } from '../../shared/modelos/evento.model';
import { ObtencionDatosService } from '../../shared/servicios/obtencion-datos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  arrayEventos: Evento[] = [];

  constructor(private obDatosService: ObtencionDatosService) { }

  ngOnInit(): void {
     this.obDatosService.obtenerEventos()
      .subscribe( response => {
        response.api.events.forEach(element => {
          let nombreE = element.teamName ? element.teamName : '';
          let nombreJ = element.player ? element.player : '';
          let nombreArb = element.assist ? element.assist : '';
          let det = element.detail ? element.detail : '';
          let com = element.comments ? element.comments : '';

          let eventoObj: Evento = {
              nombreEquipo: nombreE,
              nombreJugador: nombreJ,
              arbitro: nombreArb,
              detalle: det,
              comentarios: com
          }
          this.arrayEventos.push(eventoObj);
        })
      });
  }

}
