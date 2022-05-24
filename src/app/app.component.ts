import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgcCookieConsentService, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';
import { faEnvelope as faCookie } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import {Event, RouterEvent, Router, NavigationStart} from '@angular/router';
import { filter } from 'rxjs/operators';


import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';

declare var $: any;
declare var gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [style({ opacity: 0 })],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0 }), animate('0.6s', style({ opacity: 1 }))],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy{

  title = '4gatosphotovideo';
  faCookie = faCookie;
  //keep refs to subscriptions to be able to unsubscribe later
  private statusChangeSubscription: Subscription;
  private scrollPosition: number;

  constructor(
    private ccService: NgcCookieConsentService, 
    private router: Router) { }

  ngOnInit(): void {

    if (this.ccService.hasConsented()) {
      this.callGoogleAnalytics();
    }

    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {
        if (this.ccService.hasConsented()) {
          this.callGoogleAnalytics();
        }
      });

      this.router.events.pipe(
        filter((e: Event): e is RouterEvent => e instanceof NavigationStart)
      ).subscribe((e: NavigationStart) => {
        if(e.url=='/'){
          // Close fullscreen gallery if opened
          $('.nGY2Icon-ngy2_close2').click();
          setTimeout(() => {
            window.scroll(0,this.scrollPosition)        
          }, 1);
        }else{
          this.scrollPosition = window.scrollY;
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
