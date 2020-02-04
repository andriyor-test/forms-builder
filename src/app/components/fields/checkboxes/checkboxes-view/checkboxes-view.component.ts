import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {Field} from '../../../../models/config.types';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes-view.component.html',
  styleUrls: ['./checkboxes-view.component.css']
})
export class CheckboxesViewComponent implements OnInit {
  @Input() field: Field;
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  get options() {
    return this.formGroup.get('options') as FormArray;
  }

}
