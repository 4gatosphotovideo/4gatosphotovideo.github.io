import { Component, OnInit } from '@angular/core';
import { Session } from '../session-page/session';
import { ServicesLoader } from './services.loader';

// jQuery
declare var $: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public sessions: Session[];

  constructor(private servicesLoader: ServicesLoader) {
    this.sessions = servicesLoader.services;
  }

  ngOnInit(): void {

  }

  getMinPrice(session: Session){
    var minPrice = session.tariffs[0];
    for(var i=session.tariffs.length-1; i>=0; i--){
      if (session.tariffs[i].price < minPrice.price) minPrice = session.tariffs[i];
    }
    return minPrice;
  }

}
