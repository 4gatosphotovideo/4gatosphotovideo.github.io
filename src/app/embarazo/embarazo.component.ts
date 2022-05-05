import { Component, OnInit } from '@angular/core';
import { Session } from '../session-page/session';
import { SessionPageComponent } from '../session-page/session-page.component';
import data from './embarazo-data.json';

@Component({
  templateUrl: '../session-page/session-page.component.html',
  styleUrls: ['../session-page/session-page.component.scss']
})
export class EmbarazoComponent extends SessionPageComponent {

  data: Session = data;

}
