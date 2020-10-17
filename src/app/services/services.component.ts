import { Component, OnInit } from '@angular/core';
import { Service } from './service';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public services: Service[];

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.services = this.servicesService.services;
  }

}
