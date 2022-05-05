import { Component, OnInit, HostListener } from '@angular/core';
import { faArrowCircleDown as faArrowDown } from '@fortawesome/free-solid-svg-icons';

// jQuery
declare var $: any;

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
    $('.arrow>a').on('click', function () {
      console.log("Click on arrow!");
      $('.navbar-collapse').collapse('hide');
      $('.dropdown-menu').collapse('hide');
    });

    $('a[href*="#"]')
      // Remove links to different routes
      .not('[href="#"]')
      .not('[href="#0"]')
      .not('[href="#cookie"]')
      .not('[href="#legal"]')
      .on('click', function (event) {
        console.log("Click on anchor!");
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          var hash = this.hash;
          var scrollOffset = $(hash).data("scroll-offset") || 60;
          $('html, body').animate({ scrollTop: $(hash).offset().top - scrollOffset }, 1200, 'easeInOutExpo');
          return false;
        }
      });

  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.checkNavbarStatus();
  }

  private checkNavbarStatus(){

    this.headerScrolled=(window.pageYOffset>50)?"scrolled":"";
    
  }
  
}
