// import { Component, Input, OnInit } from '@angular/core';
// import { Service } from '../service';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// @Component({
//   selector: 'app-tariff',
//   templateUrl: './tariff.component.html',
//   styleUrls: ['./tariff.component.scss']
// })
// export class TariffComponent implements OnInit {

//   faWhatsapp = faWhatsapp;
//   faPlus = faPlus;
//   whatsAppMessage = "Hola! Quiero información sobre ";

//   @Input() service: Service;

//   constructor() { }

//   ngOnInit(): void {
//   }

//   getMinPrice(service: Service){
//     var minPrice = service.tariffs[0];
//     for(var i=service.tariffs.length-1; i>=0; i--){
//       if (service.tariffs[i].price < minPrice.price) minPrice = service.tariffs[i];
//     }
//     return minPrice;
//   }
  
// }
