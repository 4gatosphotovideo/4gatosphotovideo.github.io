import { Component, OnInit } from '@angular/core';
import data from './reviews.json';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviewsData: {name: string, text: string, stars: number, link: string}[] = data;

  constructor() { }

  ngOnInit(): void {
    console.log(this.reviewsData)
  }

  counter(i: number) {
    return new Array(i);
}

}
