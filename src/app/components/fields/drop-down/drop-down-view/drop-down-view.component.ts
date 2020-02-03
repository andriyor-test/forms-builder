import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down-view.component.html',
  styleUrls: ['./drop-down-view.component.css']
})
export class DropDownViewComponent implements OnInit {
  @Input() control;
  @Input() group;

  constructor() { }

  ngOnInit() {
  }
}
