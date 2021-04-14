import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DatosService } from 'src/app/shared/servicios/datos.service';
import { Jugador } from 'src/app/shared/modelos/jugador.model';
import { ObtencionDatosService } from 'src/app/shared/servicios/obtencion-datos.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  filtroInput = '';
  arrayJugadores: Jugador[] = [];
  @Input() idEquipo: number = 0;
  @Input() temporada: number;
  formNuevoJugador = false;
  jugadorSeleccionado = {};
  modalConfirmacion = false;
  cambioEquipo$: Observable<number>;
  @Output() quitarJugadores = new EventEmitter<any>();
  activo = false;

  constructor(private ruta: ActivatedRoute, private router: Router, private obDatosService: ObtencionDatosService, private toastr: ToastrService, private datosService: DatosService) { }

  ngOnInit(): void {
    this.cambioEquipo$ = this.datosService.getcambioEquipo$();

    this.cambioEquipo$.subscribe(id => {
      this.idEquipo = id;
      this.obDatosService.obtenerJugadores(this.idEquipo)
        .subscribe(response => {
          this.arrayJugadores = [];
          this.guardarJugadoresEnArray(response);
        });
    });

    this.obDatosService.obtenerJugadores(this.idEquipo)
      .subscribe(response => {
        this.guardarJugadoresEnArray(response);
      });

  }

  guardarJugadoresEnArray(response){
    console.log("response ", response)
    response.api.players.forEach(element => {
      if (element.season == this.temporada) {
        let edadJ = element.age ? element.age : '';
        let ciudadJ = element.birth_place ? element.birth_place : '';
        let paisJ = element.birth_country ? element.birth_country : '';

        let jugadorObj: Jugador = {
          id: element.player_id,
          nombre: element.player_name,
          edad: edadJ,
          ciudad: ciudadJ,
          pais: paisJ
        }
        this.arrayJugadores.push(jugadorObj);
      }

    })

    console.log(this.arrayJugadores);
 
  }

  volver() {
    this.quitarJugadores.emit();
  }

  nuevoJugador() {
    this.formNuevoJugador = true;
  }

  agregarJuagdor(jugador) {
    console.log('Jugador recibido: ' + jugador);
    if (this.arrayJugadores.push(jugador)) {
      this.toastrExito('Jugador insertado con éxito!');
    } else {
      this.toastrError('No se ha podido insertar el jugador.');
    }

    this.formNuevoJugador = false;
  }

  toastrExito(mensaje) {
    this.toastr.success(mensaje);
  }

  toastrError(mensaje) {
    this.toastr.error(mensaje);
  }

  toastrWarning(mensaje) {
    this.toastr.warning(mensaje);
  }

  cerrarModal() {
    this.formNuevoJugador = false;
    this.toastrWarning('Inserción del jugador cancelada.');
  }

  guardarJugadorSeleccionado(idJugador) {
    this.jugadorSeleccionado = idJugador;
    console.log(this.jugadorSeleccionado);
  }

  eliminarJugador() {
    this.modalConfirmacion = true;
  }

  confirmarEliminacion(confirmacion) {
    if (confirmacion) {
      if (this.eliminarJugadorArray(this.jugadorSeleccionado)) {
        this.toastrExito('Se ha podido eliminar el jugador con éxito');
      } else {
        this.toastrError('No se ha podido eliminar el jugador.')
      }
    } else {
      this.toastrWarning('Operación cancelada.');
    }

    this.modalConfirmacion = false;
    this.jugadorSeleccionado = { id: 0, nombre: '', ciudad: '', pais: '', edad: 0 };
  }

  eliminarJugadorArray(jugador){
    let estado = false;

    if (jugador != 0) {
      this.arrayJugadores.forEach((element, i) => {
        if (element.id == jugador) {
          this.arrayJugadores.splice(i, 1);
          estado = true;
        }
      });      
    } 
      
    return estado;
   
  }

}


