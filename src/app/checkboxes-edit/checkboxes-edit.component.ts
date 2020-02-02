import {Component, Input} from '@angular/core';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'app-checkboxes-edit',
  templateUrl: './checkboxes-edit.component.html',
  styleUrls: ['./checkboxes-edit.component.css']
})
export class CheckboxesEditComponent {
  @Input() control;
  @Input() form;

  get checkboxes() {
    return this.form.get('checkboxes') as FormArray;
  }
}
