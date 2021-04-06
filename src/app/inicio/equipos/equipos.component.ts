import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { DatosService } from 'src/app/shared/datos.service';
import { Equipo } from 'src/app/shared/equipo.model';
import { ObtencionDatosService } from 'src/app/shared/obtencion-datos.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  arrayEquipos: Equipo[];
  idLiga: number = 0;
  temporada: number = 0;;
  filtroInput = '';
  idEquipoAMostrar: number = 0;
  cambioEquipo$: Observable<number>;

  constructor(private datosService: DatosService, private ruta: ActivatedRoute, private obDatosService: ObtencionDatosService) { }

  ngOnInit(): void {
    this.idLiga = this.ruta.snapshot.params['id'];
    this.temporada = this.ruta.snapshot.params['temporada'];

    this.cambioEquipo$ = this.datosService.getcambioEquipo$();
    this.cambioEquipo$.subscribe(id => this.idEquipoAMostrar = id);

    this.arrayEquipos =  this.obDatosService.obtenerEquipos(this.idLiga);
  }

  cargarJugadores(id){
    this.datosService.guardarIdEquipoAMostrar(id);
  }

  cerrarJugadores(){
    this.idEquipoAMostrar = 0;
  }

  

  

}
