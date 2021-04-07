import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { DatosService } from 'src/app/shared/servicios/datos.service';
import { Equipo } from 'src/app/shared/modelos/equipo.model';
import { ObtencionDatosService } from 'src/app/shared/servicios/obtencion-datos.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  arrayEquipos: Equipo[] = [];
  idLiga: number = 0;
  temporada: number = 0;;
  filtroInput = '';
  idEquipoAMostrar: number = 0;
  cambioEquipo$: Observable<number>;
  mostrarEquipos = false;

  constructor(private datosService: DatosService, private ruta: ActivatedRoute, private obDatosService: ObtencionDatosService) { }

  ngOnInit(): void {
    this.idLiga = this.ruta.snapshot.params['id'];
    this.temporada = this.ruta.snapshot.params['temporada'];

    this.cambioEquipo$ = this.datosService.getcambioEquipo$();
    this.cambioEquipo$.subscribe(id => this.idEquipoAMostrar = id);

    this.obDatosService.obtenerEquipos(this.idLiga)
      .subscribe(response => {

        response.api.teams.forEach(element => {
          let idE = element.team_id;
          let nombreE = element.name ? element.name : '';
          let logoE = element.logo ? element.logo : '';

          let equipoObj: Equipo = {
            id: idE,
            nombreEquipo: nombreE,
            logo: logoE
          }
          this.arrayEquipos.push(equipoObj);
        });

      });
  }

  cargarJugadores(id) {
    this.datosService.guardarIdEquipoAMostrar(id);
    this.mostrarEquipos = true;
  }

  cerrarJugadores() {
    this.idEquipoAMostrar = 0;
    this.mostrarEquipos = false;
  }





}
