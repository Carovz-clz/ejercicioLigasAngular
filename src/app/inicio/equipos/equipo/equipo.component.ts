import { Component, Input, OnInit } from '@angular/core';
import { Equipo } from 'src/app/shared/equipo.model';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  @Input() equipo: Equipo;

  constructor() { }

  ngOnInit(): void {
  }

}
