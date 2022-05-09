import { Component, HostListener, OnInit } from '@angular/core';

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
  ]

  headerScrolled: String = "";

  constructor() { }

  ngOnInit(): void {

    $(window).on("load", function () {

      var urlHash = window.location.href.split("#")[1];

      if (urlHash && $('#' + urlHash).length) {
        $('html,body').animate({
          scrollTop: $('#' + urlHash).offset().top - 60
        }, 1200, 'easeInOutExpo');

      } else {
        var serviceModalId = "#modal" + urlHash;
        if ($(serviceModalId).length) {
          $(serviceModalId).modal('show');
        }
      }
      history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
    });

    $('.navbar-brand, .nav-link:not(.dropdown-toggle)').on('click', function () {
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
      .on('click', function (event) {
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

  private checkNavbarStatus() {
    var isExpanded = ($(".navbar-toggler").attr("aria-expanded")) == 'true';
    this.headerScrolled = (isExpanded || window.pageYOffset > 50) ? "scrolled" : "";
  }

}
