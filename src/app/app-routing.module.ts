import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './paginas/eventos/eventos.component';
import { JugadoresComponent } from './componentes/jugadores/jugadores.component';
import { EquiposComponent } from './paginas/inicio/equipos/equipos.component';
import { InicioComponent } from './paginas/inicio/inicio.component';

const routes: Routes = [
  {path:'', component: InicioComponent, pathMatch: 'full'},
  {path:'inicio/:id/:temporada', component: EquiposComponent, children: [
    {path:':idequipo/nuevojugador', component: JugadoresComponent},
  ]},
  {path:'eventos', component: EventosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
