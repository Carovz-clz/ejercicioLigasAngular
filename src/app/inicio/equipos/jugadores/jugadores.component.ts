import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  formNuevoJugador = false;

  constructor(private ruta: ActivatedRoute, private router: Router, private obDatosService: ObtencionDatosService) { }

  ngOnInit(): void {
    this.ruta.params.subscribe(
      (params: Params) => {
        this.idEquipo = params['idequipo'];
        this.arrayJugadores = this.obDatosService.obtenerJugadores(this.idEquipo);
      }
    );
  }

  volver(){
    this.router.navigate(['../'], {relativeTo: this.ruta});
  }

  nuevoJugador(){
    this.formNuevoJugador = true;
  }

  agregarJuagdor(jugador){
    console.log('Jugador recibido: '+jugador);
    this.obDatosService.agregarJugador(jugador, this.idEquipo);
    this.formNuevoJugador = false;
  }

  cerrarModal(){
    this.formNuevoJugador = false;
  }

}
