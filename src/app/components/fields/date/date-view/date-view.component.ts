import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date-view.component.html',
  styleUrls: ['./date-view.component.css']
})
export class DateViewComponent implements OnInit {
  @Input() control;
  @Input() group;

  constructor() { }

  ngOnInit() {
  }

}
