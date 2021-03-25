import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { JugadoresComponent } from './inicio/equipos/jugadores/jugadores.component';
import { EquiposComponent } from './inicio/equipos/equipos.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:'', component: InicioComponent, pathMatch: 'full'},
  {path:'inicio/:id', component: EquiposComponent, children: [
    {path:':idequipo', component: JugadoresComponent},
    {path:':idequipo/nuevojugador', component: JugadoresComponent},
  ]},
  {path:'eventos', component: EventosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
