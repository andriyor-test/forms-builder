import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-short-answer',
  templateUrl: './short-answer-view.component.html',
  styleUrls: ['./short-answer-view.component.css']
})
export class ShortAnswerViewComponent implements OnInit {
  @Input() control;
  @Input() group;

  constructor() {
  }

  ngOnInit() {
  }
}
