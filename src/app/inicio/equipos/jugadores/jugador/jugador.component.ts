import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Jugador } from 'src/app/shared/jugador.model';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  @Input() jugador: Jugador;
  @Output() jugadorSeleccionado = new EventEmitter<Jugador>();
  activo:boolean = false;

  constructor() { }

  ngOnInit(){
  }

  seleccionarJugador(){
    this.activo = true;
    this.jugadorSeleccionado.emit(this.jugador);
  }

}
