import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../../shared/evento.model';

@Component({
  selector: 'app-item-evento',
  templateUrl: './item-evento.component.html',
  styleUrls: ['./item-evento.component.css']
})
export class ItemEventoComponent implements OnInit {
  @Input() evento: Evento;

  constructor() { }

  ngOnInit(): void {
  }

}
