import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { EmbarazoComponent } from './services/embarazo/embarazo.component';
import { HomeComponent } from './home/home.component';
import { LegalComponent } from './legal/legal.component';
import { BebesComponent } from './services/bebes/bebes.component';
import { NewbornComponent } from './services/newborn/bebes.component';
import { ComunionComponent } from './services/comunion/comunion.component';
import { FamiliasComponent } from './services/familias/familias.component';
import { IndividualComponent } from './services/individual/individual.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'disabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
