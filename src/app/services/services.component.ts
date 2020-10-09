import { Component, OnInit } from '@angular/core';
import { Service } from './service';

// Services data
import newborn from "./data/newborn.json";
import familias from "./data/familias.json";
import embarazo from "./data/embarazo.json";
import bebes from "./data/bebes.json";
import bodas from "./data/bodas.json";
import individual from "./data/individual.json";
import smashcake from "./data/smashcake.json";
import comunion from "./data/comunion.json";
import navidad from "./data/navidad.json";
import empresa from "./data/empresa.json";
import eventos from "./data/eventos.json";
import infantil from "./data/infantil.json";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: Service[] = [newborn, familias, embarazo, bebes, bodas, individual, smashcake, comunion, navidad, empresa, eventos, infantil];

  constructor() { }

  ngOnInit(): void {
  }

}
