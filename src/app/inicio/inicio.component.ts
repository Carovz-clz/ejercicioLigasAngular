import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from '../shared/equipo.model';
import { ObtencionDatosService } from '../shared/obtencion-datos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  arrayEquipos: Equipo[];
  idLiga: number;

  constructor(private ruta: ActivatedRoute, private obDatosService: ObtencionDatosService) { }

  ngOnInit(): void {
    this.idLiga = this.ruta.snapshot.params['id'];
    this.arrayEquipos =  this.obDatosService.obtenerEquipos(this.idLiga);
  }

 

}
