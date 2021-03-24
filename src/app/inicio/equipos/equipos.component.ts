import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from 'src/app/shared/equipo.model';
import { ObtencionDatosService } from 'src/app/shared/obtencion-datos.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  @Output() exponerIdLiga = new EventEmitter<number>();
  arrayEquipos: Equipo[];
  idLiga: number;

  constructor(private ruta: ActivatedRoute, private obDatosService: ObtencionDatosService) { }

  ngOnInit(): void {
    this.idLiga = this.ruta.snapshot.params['id'];
    this.arrayEquipos =  this.obDatosService.obtenerEquipos(this.idLiga);
    console.log(this.arrayEquipos);
    this.exponerIdLiga.emit(this.idLiga);
  }

}
