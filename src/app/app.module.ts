import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetalleComponent } from './detalle/detalle.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ListadoPrincipalComponent } from './listado-principal/listado-principal.component';
import { TopRatingFilmsComponent } from './top-rating-films/top-rating-films.component';


@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    ListadoPrincipalComponent,
    TopRatingFilmsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
