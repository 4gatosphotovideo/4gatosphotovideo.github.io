import { Component, OnInit } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faArrow = faArrowDown;
  constructor() { }

  ngOnInit(): void {
  }

}
