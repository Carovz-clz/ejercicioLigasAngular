import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroJugadores'
})
export class FiltroJugadoresPipe implements PipeTransform {

  transform(jugadores: any, arg: any): any {
    const result = [];
    if(arg == ''){
      return jugadores;
    }else{
      for(const jugador of jugadores){
        if(jugador.nombre.indexOf(arg) > -1){
          result.push(jugador);
        }
      }
      return result;
    }    
  }

}
