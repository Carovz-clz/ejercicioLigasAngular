import { Pipe, PipeTransform } from '@angular/core';
import { Equipo } from '../shared/equipo.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(equipos: any[], arg: any): any {
    const resultEquipos = [];
    if(arg == ''){
      return equipos;
    }else{
      for(const equipo of equipos){
        if(equipo.nombreEquipo.indexOf(arg) > -1){
          resultEquipos.push(equipo);
        }
      }
      return resultEquipos;
    }    
  }

}
