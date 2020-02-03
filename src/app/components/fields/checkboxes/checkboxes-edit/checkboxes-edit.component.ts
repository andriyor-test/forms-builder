import {Component, Input} from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-checkboxes-edit',
  templateUrl: './checkboxes-edit.component.html',
  styleUrls: ['./checkboxes-edit.component.css']
})
export class CheckboxesEditComponent {
  @Input() control;
  @Input() form;

  constructor(private fb: FormBuilder) {}

  get options() {
    return this.form.get('options') as FormArray;
  }

  onAddCheckbox() {
    this.options.push(this.fb.group({
      value: false,
      label: '',
    }));
  }

}
