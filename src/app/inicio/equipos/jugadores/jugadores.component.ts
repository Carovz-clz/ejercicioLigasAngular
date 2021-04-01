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
  jugadorSeleccionado = 0;
  modalConfirmacion = false;
  activo = false;

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
      this.toastrExito('Jugador insertado con éxito!');
    }else{
      this.toastrError('No se ha podido insertar el jugador.');
    }

    this.formNuevoJugador = false;
  }

  toastrExito(mensaje){
    this.toastr.success(mensaje);
  }

  toastrError(mensaje){
    this.toastr.error(mensaje);
  }

  toastrWarning(mensaje){
    this.toastr.warning(mensaje);
  }

  cerrarModal(){
    this.formNuevoJugador = false;
    this.toastrWarning('Inserción del jugador cancelada.');
  }

  guardarJugadorSeleccionado(idJugador){
    this.jugadorSeleccionado = idJugador;
    console.log(this.jugadorSeleccionado);
  }

  eliminarJugador(){
    this.modalConfirmacion = true;
  }

  confirmarEliminacion(confirmacion){
    if(confirmacion){      
      if(this.obDatosService.eliminarJugador(this.jugadorSeleccionado) ){
        this.toastrExito('Se ha podido eliminar el jugador con éxito');
      }else{
        this.toastrError('No se ha podido eliminar el jugador.')
      }
    }else{
      this.toastrWarning('Operación cancelada.');
    }

    this.modalConfirmacion = false;
  }

}
