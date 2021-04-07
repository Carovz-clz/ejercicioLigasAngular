import {  Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Liga } from './shared/modelos/liga.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  usuario: string;
  liga: Liga;
  sesionIniciada = false;

  constructor(private router: Router){}

  iniciarSesion(objetoSesion){
    this.sesionIniciada = true;
    this.usuario = objetoSesion.sesion;
    this.liga = objetoSesion.liga;
    this.router.navigate(['/inicio', this.liga.id, this.liga.temporada]);
  }

  ngOnInit(){
  }


}
