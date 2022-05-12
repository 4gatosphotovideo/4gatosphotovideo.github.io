import { Location } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// jQuery
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  services: Array<{route: string, label: string}> = [
    {route: "bebes", label:"Bebés"},
    {route: "newborn", label:"Newborn"},
    {route: "embarazo", label:"Embarazo"},
    {route: "comunion", label:"Comunión"},
    {route: "familias", label:"Familias"},
    {route: "individual", label:"Individual"},
  ]

  headerScrolled: String = "";
  route: string = '';

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.route = location.path();
      } else {
        this.route = 'home'
      }
    });
  }
 
  ngOnInit(): void {
    this.initScrollAnimation();
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.checkNavbarStatus();
  }

  private checkNavbarStatus() {
    var isExpanded = ($(".navbar-toggler").attr("aria-expanded")) == 'true';
    this.headerScrolled = (isExpanded || window.pageYOffset > 50) ? "scrolled" : "";
  }


  private initScrollAnimation(){

      $('.navbar-brand').on('click',function(){
        $('.navbar-collapse').collapse('hide');
        $('.dropdown-menu').collapse('hide');
        return false;
      });

      $('.nav-link:not(.dropdown-toggle)').on('click', function () {
        $('.navbar-collapse').collapse('hide');
        $('.dropdown-menu').collapse('hide');
      });
  
      $('.navbar-toggler').on('click', function () {
        var isExpanded = ($(".navbar-toggler").attr("aria-expanded")) == 'false';
        if (isExpanded) $(".navbar").addClass("scrolled");
        else if (!(window.pageYOffset > 50)) $(".navbar").removeClass("scrolled");
      });
  
      $('a[href*="#"]')
        // Remove links to different routes
        .not('[href="#"]')
        .not('[href="#0"]')
        .not('[href="#cookie"]')
        .not('[href="#legal"]')
        .not('[href="#carouselReviews"]')
        .on('click', function (event) {
          console.log("It has to scroll to " + this.hash)
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            var hash = this.hash;
            var scrollOffset = $(hash).data("scroll-offset") || 60;
            $('html, body').animate({ scrollTop: $(hash).offset().top - scrollOffset }, 1200, 'easeInOutExpo');
            return false;
          }
        });

  }

}
