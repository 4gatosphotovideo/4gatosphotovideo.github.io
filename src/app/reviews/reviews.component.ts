import { Component, OnInit } from '@angular/core';
import data from './reviews.json';

// jQuery
declare var $: any;

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviewsData: {name: string, text: string, stars: number, link: string}[] = data;

  constructor() { }

  ngOnInit(): void {
    $('.carousel').on('touchstart', function(event){
      const xClick = event.originalEvent.touches[0].pageX;
      $(this).one('touchmove', function(event){
          const xMove = event.originalEvent.touches[0].pageX;
          const sensitivityInPx = 5;
  
          if( Math.floor(xClick - xMove) > sensitivityInPx ){
              $(this).carousel('next');
          }
          else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
              $(this).carousel('prev');
          }
      });
      $(this).on('touchend', function(){
          $(this).off('touchmove');
      });
  });
  }

  counter(i: number) {
    return new Array(i);
}

}
