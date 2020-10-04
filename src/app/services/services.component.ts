import { Component, OnInit } from '@angular/core';
import { Service } from './service';

// Services data
import newborn from "./data/newborn.json";
import familias from "./data/familias.json";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: Service[] = [newborn, familias];

  constructor() { }

  ngOnInit(): void {
  }

}
