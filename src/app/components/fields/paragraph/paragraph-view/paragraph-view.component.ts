import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph-view.component.html',
  styleUrls: ['./paragraph-view.component.css']
})
export class ParagraphViewComponent implements OnInit {
  @Input() control;
  @Input() group;

  constructor() { }

  ngOnInit() {
  }

}
