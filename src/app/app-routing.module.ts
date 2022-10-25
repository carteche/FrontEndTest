import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ListadoPrincipalComponent } from './listado-principal/listado-principal.component';
import { TopRatingFilmsComponent } from './top-rating-films/top-rating-films.component';

const routes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'films', component: ListadoPrincipalComponent,},
  { path: 'detail/:id', component: DetalleComponent,},
  { path: 'toprating', component: TopRatingFilmsComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
