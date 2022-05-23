import { Injectable } from '@angular/core';
// Services data
import newborn from "./data/newborn.json";
import familias from "./data/familias.json";
import embarazo from "./data/embarazo.json";
import bebes from "./data/bebes.json";
import bodas from "./data/bodas.json";
import individual from "./data/individual.json";
import cumples from "./data/cumples.json";
import comunion from "./data/comunion.json";
import navidad from "./data/navidad.json";
import empresa from "./data/empresa.json";
import eventos from "./data/eventos.json";
import infantil from "./data/infantil.json";
import { Session } from '../session-page/session';

@Injectable({
  providedIn: 'root'
})
export class ServicesLoader {

  services: Session[] = [embarazo, newborn, bebes, cumples, individual, infantil, familias, comunion, bodas];

  constructor() { }
}