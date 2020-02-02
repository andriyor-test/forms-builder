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
    console.log(this.group);
  }

  get checkboxes() {
    return this.group.get('checkboxes') as FormArray;
  }

}
