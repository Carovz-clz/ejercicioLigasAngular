import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private ruta: ActivatedRoute, private router: Router, private obDatosService: ObtencionDatosService, private toastr: ToastrService) { }

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
    if (this.obDatosService.agregarJugador(jugador, this.idEquipo)){
      this.toastrExito();
    }else{
      this.toastrError();
    }

    this.formNuevoJugador = false;
  }

  toastrExito(){
    this.toastr.success('Jugador insertado con éxito!');
  }

  toastrError(){
    this.toastr.error('No se ha podido insertar el jugador.');
  }

  toastrWarning(){
    this.toastr.warning('Inserción del jugador cancelada.');
  }

  cerrarModal(){
    this.formNuevoJugador = false;
    this.toastrWarning();
  }

}
