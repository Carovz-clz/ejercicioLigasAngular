import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario: string;
  sesionIniciada=false;

  iniciarSesion(usuarioSesion){
    this.sesionIniciada = true;
    this.usuario = usuarioSesion;
    console.log('Usuario logeado: '+ this.usuario);
  }
}
