import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatosService } from 'src/app/shared/servicios/datos.service';
import { Equipo } from 'src/app/shared/modelos/equipo.model';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  @Input() equipo: Equipo;
  @Output() cargarJugadores = new EventEmitter<{}>();
  activo = false;

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
  }

  mostrarJugadores(){
    this.activo = true;
    this.cargarJugadores.emit(this.equipo);
  }

}
