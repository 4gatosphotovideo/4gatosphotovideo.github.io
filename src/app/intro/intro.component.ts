import { Component, OnInit, HostListener } from '@angular/core';
import { faArrowCircleDown as faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

faArrow = faArrowDown;
headerScrolled: String = "";

  constructor() { }

  
}
