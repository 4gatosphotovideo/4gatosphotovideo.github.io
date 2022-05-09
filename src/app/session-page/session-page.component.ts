import { Attribute, Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Session } from './session';
// jQuery
declare var $: any;
@Component({
  selector: 'app-session-page',
  templateUrl: './session-page.component.html',
  styleUrls: ['./session-page.component.scss']
})
export class SessionPageComponent implements OnInit {

  faWhatsapp = faWhatsapp;
  faPlus = faPlus;
  whatsAppMessage = "Hola! Quiero información sobre ";

  @Attribute("data")
  data: Session;

  galleryData : {
    id: string,
    size: number
  }

  constructor() {
    
  }
  ngOnInit(): void {
    this.galleryData = {
      id: this.data.id,
      size: this.data.gallerySize
    }
  }

 

}

