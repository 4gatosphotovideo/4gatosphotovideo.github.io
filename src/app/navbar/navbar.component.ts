import { Location } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

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

  isScrolled: Boolean = false;
  route: string = '';

  constructor(location: Location, router: Router, public auth: AuthService) {
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
    this.isScrolled = (isExpanded || window.pageYOffset > 50) ;
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
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            var hash = this.hash;
            var scrollOffset = $(hash).data("scroll-offset") || 60;
            $('html, body').animate({ scrollTop: $(hash).offset().top - scrollOffset }, 800, 'easeInOutExpo');
            return false;
          }
        });

  }

}
