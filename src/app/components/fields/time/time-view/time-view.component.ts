import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time-view.component.html',
  styleUrls: ['./time-view.component.css']
})
export class TimeViewComponent implements OnInit {
  @Input() control;
  @Input() group;

  constructor() { }

  ngOnInit() {
  }

}
