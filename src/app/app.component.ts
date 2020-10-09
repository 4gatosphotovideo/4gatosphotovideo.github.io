import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgcCookieConsentService, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';
import { faEnvelope as faCookie } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

declare var $: any;
declare var gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = '4gatosphotovideo';
  faCookie = faCookie;
  //keep refs to subscriptions to be able to unsubscribe later
  private statusChangeSubscription: Subscription;

  constructor(private ccService: NgcCookieConsentService) { }

  ngOnInit(): void {

    $('a[href*="#cookie"]').on('click', function (event) {
      $("#modalCookiePolicy").modal("show");
      return false;
    });

    if (this.ccService.hasConsented()) {
      this.callGoogleAnalytics();
    }

    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {
        if (this.ccService.hasConsented()) {
          this.callGoogleAnalytics();
        }
      });

  }
  ngOnDestroy(): void {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.statusChangeSubscription.unsubscribe();
  }

  private callGoogleAnalytics() {
    if (environment.production) {
      gtag('config', 'UA-155184351-1');
    }

  }


}
