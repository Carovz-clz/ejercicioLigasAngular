import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private cambioEquipo$ = new Subject<number>();
  idEquipo: number = 0;

  constructor() { }

  guardarIdEquipoAMostrar(id){
    this.idEquipo = id;
    this.cambioEquipo$.next(this.idEquipo);
  }

  getEquipoAMostar(){
    return this.idEquipo;
  }

  getcambioEquipo$(): Observable<number> {
    return this.cambioEquipo$.asObservable();
  }
}
