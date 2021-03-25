import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JugadoresComponent } from './inicio/equipos/jugadores/jugadores.component';
import { EventosComponent } from './eventos/eventos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ItemEventoComponent } from './eventos/item-evento/item-evento.component';
import { EquipoComponent } from './inicio/equipos/equipo/equipo.component';
import { EquiposComponent } from './inicio/equipos/equipos.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { JugadorComponent } from './inicio/equipos/jugadores/jugador/jugador.component';
import { FiltroJugadoresPipe } from './pipes/filtro-jugadores.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginModalComponent,
    HeaderComponent,
    FooterComponent,
    JugadoresComponent,
    EventosComponent,
    InicioComponent,
    MenuComponent,
    ItemEventoComponent,
    EquipoComponent,
    EquiposComponent,
    FiltroPipe,
    JugadorComponent,
    FiltroJugadoresPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
