import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { EventosComponent } from './eventos/eventos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginModalComponent,
    HeaderComponent,
    FooterComponent,
    JugadoresComponent,
    EventosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
