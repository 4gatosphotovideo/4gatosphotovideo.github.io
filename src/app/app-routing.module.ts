import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { EmbarazoComponent } from './embarazo/embarazo.component';
import { HomeComponent } from './home/home.component';
import { LegalComponent } from './legal/legal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cookies', component: CookiePolicyComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'embarazo', component: EmbarazoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
