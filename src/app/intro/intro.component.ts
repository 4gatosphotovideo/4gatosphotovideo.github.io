import { Component, OnInit, HostListener } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

faArrow = faArrowDown;
headerScrolled: String = "";

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.checkNavbarStatus();
  }

  private checkNavbarStatus(){

    this.headerScrolled=(window.pageYOffset>50)?"scrolled":"";
    
  }
  
}
