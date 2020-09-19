import { Component, HostListener, OnInit } from '@angular/core';

// jQuery
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  

  headerScrolled: String = "";

  constructor() { }


  ngOnInit(): void {

    $(window).on("load", function () {

      var urlHash = window.location.href.split("#")[1];
  
      if (urlHash &&  $('#' + urlHash).length) {
          $('html,body').animate({
              scrollTop: $('#' + urlHash).offset().top - 60
          }, 1200, 'easeInOutExpo');
          history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
      }
  });

  $('.nav-link:not(.dropdown-toggle)').on('click',function() {
    $('.navbar-collapse').collapse('hide');
    $('.dropdown-menu').collapse('hide');
  });

    $('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.on('click', function(event) {   

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        // - 70 is the offset/top margin
        $('html, body').animate({scrollTop: $(hash).offset().top - 60}, 1200, 'easeInOutExpo');
        return false;    
    } // End if
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
