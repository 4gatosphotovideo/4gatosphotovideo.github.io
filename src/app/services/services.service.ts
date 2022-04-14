import { Injectable } from '@angular/core';
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
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  services: Service[] = [embarazo, newborn, bebes, individual, infantil, familias, smashcake, comunion, bodas, navidad, empresa, eventos];

  constructor() { }
}
