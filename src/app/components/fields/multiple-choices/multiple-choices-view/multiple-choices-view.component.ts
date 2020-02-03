import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-choices',
  templateUrl: './multiple-choices-view.component.html',
  styleUrls: ['./multiple-choices-view.component.css']
})
export class MultipleChoicesViewComponent implements OnInit {
  @Input() control;
  @Input() group;

  constructor() { }

  ngOnInit() {
  }

}
