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
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';
import { TariffComponent } from './services/tariff/tariff.component';
import { ServicesComponent } from './services/services.component';
import { ReplaceSpacesURL } from './shared/pipe/ReplaceSpacesURL';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { LegalComponent } from './legal/legal.component';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'joseluislopez87.github.io' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
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
    href: "#cookie",
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
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    TariffComponent,
    ReplaceSpacesURL,
    CookiePolicyComponent,
    LegalComponent
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
