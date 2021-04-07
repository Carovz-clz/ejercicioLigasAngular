import { Component, Input, OnInit } from '@angular/core';
import { Liga } from '../../shared/modelos/liga.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() usuario: string;
  @Input() liga: Liga;

  constructor() { }

  ngOnInit(){
  }

}
