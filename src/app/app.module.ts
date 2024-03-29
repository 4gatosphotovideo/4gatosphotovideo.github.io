import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GalleryPhotoComponent } from './gallery-photo/gallery-photo.component';
import { GalleryVideoComponent } from './gallery-video/gallery-video.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { ReplaceSpacesURL } from './shared/pipe/ReplaceSpacesURL';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { LegalComponent } from './legal/legal.component';
import { HomeComponent } from './home/home.component';
import { SessionPageComponent } from './session-page/session-page.component';
import { EmbarazoComponent } from './services/embarazo/embarazo.component';
import { BebesComponent } from './services/bebes/bebes.component';
import { NewbornComponent } from './services/newborn/newborn.component';
import { ComunionComponent } from './services/comunion/comunion.component';
import { FamiliasComponent } from './services/familias/familias.component';
import { IndividualComponent } from './services/individual/individual.component';
import { ServicesComponent } from './services/services.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TruncateTextPipe } from './shared/pipe/TruncateTextPipe';
import { CumplesComponent } from './services/cumples/cumples.component';
import { NavidadComponent } from './services/navidad/navidad.component';
import { InfantilComponent } from './services/infantil/infantil.component';
import { BodasComponent } from './services/bodas/bodas.component';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: '4gatosphotovideo.com' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#28a745'
    }
  },
  theme: 'classic',
  type: 'opt-out',
  content:{
    message: 'Sí, esta web también utiliza cookies y nos obligan a que nos des tu consentimiento para usarlas y poder ofrecerte una mejor experiencia.<br/>Más información sobre nuestra ',
    deny: "No quiero",
    allow: "Aceptar",
    link: "política de cookies",
    href: "cookies",
    policy:"<i class=\"fas fa-cookie-bite fa-lg\" title=\"Cookies\"></i>",
    target: "_self"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    AboutComponent,
    GalleryPhotoComponent,
    GalleryVideoComponent,
    ContactComponent,
    FooterComponent,
    ReplaceSpacesURL,
    TruncateTextPipe,
    CookiePolicyComponent,
    LegalComponent,
    HomeComponent,
    ServicesComponent,
    SessionPageComponent,
    EmbarazoComponent,
    BebesComponent,
    NewbornComponent,
    ComunionComponent,
    FamiliasComponent,
    IndividualComponent,
    ReviewsComponent,
    CumplesComponent,
    NavidadComponent,
    InfantilComponent,
    BodasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
