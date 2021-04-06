import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatosService } from 'src/app/shared/datos.service';
import { Equipo } from 'src/app/shared/equipo.model';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  @Input() equipo: Equipo;
  @Output() cargarJugadores = new EventEmitter<number>();

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
  }

  mostrarJugadores(idEquipo){
    this.cargarJugadores.emit(idEquipo);
  }

}
