import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jugador } from 'src/app/shared/jugador.model';
import { ObtencionDatosService } from 'src/app/shared/obtencion-datos.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  filtroInput = '';
  arrayJugadores: Jugador[];
  idEquipo: number;

  constructor(private ruta: ActivatedRoute, private obDatosService: ObtencionDatosService) { }

  ngOnInit(): void {
    this.idEquipo = this.ruta.snapshot.params['idequipo'];
    this.arrayJugadores = this.obDatosService.obtenerJugadores(this.idEquipo);
    console.log(this.arrayJugadores);
  }

}
