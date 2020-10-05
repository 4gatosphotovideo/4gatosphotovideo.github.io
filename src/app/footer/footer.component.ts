import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  constructor() { }

  ngOnInit(): void {
    $('a[href*="#legal"]').on('click', function (event) {
      $("#modalLegal").modal('show');
      return false;
    });
  }

}
