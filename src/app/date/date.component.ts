import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  @Input() control;

  constructor() { }

  ngOnInit() {
    console.log(this.control);
  }

}
