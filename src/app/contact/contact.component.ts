import { Component, OnInit } from '@angular/core';
import {faMapMarkerAlt, faPhoneAlt as faPhone, faEnvelope as faMail} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';

// jQuery
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faLocation = faMapMarkerAlt;
  faPhone = faPhone;
  faWhatsapp = faWhatsapp;
  faMail = faMail;

  constructor() { }

  ngOnInit(): void {
  }

}
