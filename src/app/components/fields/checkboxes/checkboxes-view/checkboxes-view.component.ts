import {Component, Input, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes-view.component.html',
  styleUrls: ['./checkboxes-view.component.css']
})
export class CheckboxesViewComponent implements OnInit {
  @Input() control;
  @Input() group;

  constructor() { }

  ngOnInit() {
  }

  get options() {
    return this.group.get('options') as FormArray;
  }

}
