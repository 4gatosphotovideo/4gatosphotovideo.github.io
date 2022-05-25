import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { EmbarazoComponent } from './services/embarazo/embarazo.component';
import { HomeComponent } from './home/home.component';
import { LegalComponent } from './legal/legal.component';
import { BebesComponent } from './services/bebes/bebes.component';
import { NewbornComponent } from './services/newborn/newborn.component';
import { ComunionComponent } from './services/comunion/comunion.component';
import { FamiliasComponent } from './services/familias/familias.component';
import { IndividualComponent } from './services/individual/individual.component';
import { CumplesComponent } from './services/cumples/cumples.component';
import { NavidadComponent } from './services/navidad/navidad.component';
import { InfantilComponent } from './services/infantil/infantil.component';
import { BodasComponent } from './services/bodas/bodas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cookies', component: CookiePolicyComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'embarazo', component: EmbarazoComponent },
  { path: 'bebes', component: BebesComponent },
  { path: 'newborn', component: NewbornComponent },
  { path: 'comunion', component: ComunionComponent },
  { path: 'familias', component: FamiliasComponent },
  { path: 'individual', component: IndividualComponent },
  { path: 'cumples', component: CumplesComponent },
  { path: 'navidad', component: NavidadComponent },
  { path: 'infantil', component: InfantilComponent },
  { path: 'bodas', component: BodasComponent },
  { path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
