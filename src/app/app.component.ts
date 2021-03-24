import { Component } from '@angular/core';
import { Liga } from './shared/liga.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario: string;
  liga: Liga;
  sesionIniciada = false;

  iniciarSesion(objetoSesion){
    this.sesionIniciada = true;
    this.usuario = objetoSesion.sesion;
    this.liga = objetoSesion.liga;
    console.log('Usuario logeado: '+ this.usuario);
    console.log('Liga elegida: '+ this.liga.nombre);
  }


}
