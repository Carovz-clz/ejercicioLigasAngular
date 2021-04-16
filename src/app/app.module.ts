import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModalComponent } from './paginas/login-modal/login-modal.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { JugadoresComponent } from './paginas/jugadores/jugadores.component';
import { EventosComponent } from './paginas/eventos/eventos.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './componentes/menu/menu.component';
import { ItemEventoComponent } from './componentes/item-evento/item-evento.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { EquiposComponent } from './paginas/inicio/equipos/equipos.component';
import { FiltroPipe } from './shared/pipes/filtro.pipe';
import { FiltroJugadoresPipe } from './shared/pipes/filtro-jugadores.pipe';
import { NuevoJugadorComponent } from './componentes/nuevo-jugador/nuevo-jugador.component';
import { ModalConfirmacionComponent } from './shared/componentes/modal-confirmacion/modal-confirmacion.component';

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
    FiltroJugadoresPipe,
    NuevoJugadorComponent,
    ModalConfirmacionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
