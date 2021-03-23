import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:'', redirectTo: '/inicio', pathMatch: 'full'},
  {path:'inicio', component: InicioComponent},
  {path:'eventos', component: EventosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
