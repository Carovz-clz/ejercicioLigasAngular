import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { DatosService } from 'src/app/shared/servicios/datos.service';
import { Equipo } from 'src/app/shared/modelos/equipo.model';
import { ObtencionDatosService } from 'src/app/shared/servicios/obtencion-datos.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css',],
  animations: [
    trigger('changeState', [
      state('mostrarEquipos', style({ 'display': 'grid', 'grid-template-columns': 'repeat(3, 1fr)',  'grid-gap': '10px', 'width': '100%' })),
      state('mostrarJugadores', style({ 'width':' 40%',  'display': 'grid', 'grid-template-columns': 'repeat(1, 1fr)'})),
      transition('mostrarEquipos=>mostrarJugadores', [animate('0.5s ease-out')]),
      transition('mostrarJugadores=>mostrarEquipos', [animate('0.5s ease-in')])
    ])
  ]
})
export class EquiposComponent implements OnInit {
  arrayEquipos: Equipo[] = [];
  idLiga: number = 0;
  temporada: number = 0;;
  filtroInput = '';
  idEquipoAMostrar: number = 0;
  cambioEquipo$: Observable<number>;
  mostrarEquipos = false;
  estadoActual = 'mostrarEquipos';
  equipoObj: Equipo;

  constructor(private datosService: DatosService, private ruta: ActivatedRoute, private obDatosService: ObtencionDatosService) { }

  ngOnInit(): void {
    this.idLiga = this.ruta.snapshot.params['id'];
    this.temporada = this.ruta.snapshot.params['temporada'];

    this.cambioEquipo$ = this.datosService.getcambioEquipo$();
    this.cambioEquipo$.subscribe(id => this.idEquipoAMostrar = id);

    // this.obDatosService.obtenerEquipos(this.idLiga)
    //   .subscribe(response => {

    //     response.api.teams.forEach(element => {
    //       let idE = element.team_id;
    //       let nombreE = element.name ? element.name : '';
    //       let logoE = element.logo ? element.logo : '';

    //       let equipoObj: Equipo = {
    //         id: idE,
    //         nombreEquipo: nombreE,
    //         logo: logoE
    //       }
    //       this.arrayEquipos.push(equipoObj);
    //     });

    //   });

    this.arrayEquipos = [
      {
        "id": 529,
        "nombreEquipo": "Barcelona",
        "logo": "https://media.api-sports.io/football/teams/529.png"
      },
      {
        "id": 530,
        "nombreEquipo": "Atletico Madrid",
        "logo": "https://media.api-sports.io/football/teams/530.png"
      },
      {
        "id": 531,
        "nombreEquipo": "Athletic Club",
        "logo": "https://media.api-sports.io/football/teams/531.png"
      },
      {
        "id": 532,
        "nombreEquipo": "Valencia",
        "logo": "https://media.api-sports.io/football/teams/532.png"
      },
      {
        "id": 533,
        "nombreEquipo": "Villarreal",
        "logo": "https://media.api-sports.io/football/teams/533.png"
      },
      {
        "id": 534,
        "nombreEquipo": "Las Palmas",
        "logo": "https://media.api-sports.io/football/teams/534.png"
      },
      {
        "id": 535,
        "nombreEquipo": "Malaga",
        "logo": "https://media.api-sports.io/football/teams/535.png"
      },
      {
        "id": 536,
        "nombreEquipo": "Sevilla",
        "logo": "https://media.api-sports.io/football/teams/536.png"
      },
      {
        "id": 537,
        "nombreEquipo": "Leganes",
        "logo": "https://media.api-sports.io/football/teams/537.png"
      },
      {
        "id": 538,
        "nombreEquipo": "Celta Vigo",
        "logo": "https://media.api-sports.io/football/teams/538.png"
      },
      {
        "id": 540,
        "nombreEquipo": "Espanyol",
        "logo": "https://media.api-sports.io/football/teams/540.png"
      },
      {
        "id": 541,
        "nombreEquipo": "Real Madrid",
        "logo": "https://media.api-sports.io/football/teams/541.png"
      },
      {
        "id": 542,
        "nombreEquipo": "Alaves",
        "logo": "https://media.api-sports.io/football/teams/542.png"
      },
      {
        "id": 543,
        "nombreEquipo": "Real Betis",
        "logo": "https://media.api-sports.io/football/teams/543.png"
      },
      {
        "id": 544,
        "nombreEquipo": "Deportivo La Coruna",
        "logo": "https://media.api-sports.io/football/teams/544.png"
      },
      {
        "id": 545,
        "nombreEquipo": "Eibar",
        "logo": "https://media.api-sports.io/football/teams/545.png"
      },
      {
        "id": 548,
        "nombreEquipo": "Real Sociedad",
        "logo": "https://media.api-sports.io/football/teams/548.png"
      },
      {
        "id": 715,
        "nombreEquipo": "Granada CF",
        "logo": "https://media.api-sports.io/football/teams/715.png"
      },
      {
        "id": 727,
        "nombreEquipo": "Osasuna",
        "logo": "https://media.api-sports.io/football/teams/727.png"
      },
      {
        "id": 731,
        "nombreEquipo": "Sporting Gijon",
        "logo": "https://media.api-sports.io/football/teams/731.png"
      }
    ]
  }

  cargarJugadores(equipo) {
    this.datosService.guardarIdEquipoAMostrar(equipo.id);
    this.equipoObj = equipo;
    this.mostrarEquipos = true;
    this.estadoActual = 'mostrarJugadores';
  }

  cerrarJugadores() {
    this.idEquipoAMostrar = 0;
    this.mostrarEquipos = false;
    this.estadoActual = 'mostrarEquipos';
  }





}
