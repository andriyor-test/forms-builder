import {Component, Input, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent implements OnInit {
  @Input() control;
  @Input() group;

  constructor() { }

  ngOnInit() {
  }

  get options() {
    return this.group.get('options') as FormArray;
  }

}
