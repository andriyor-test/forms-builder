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


  get checkboxes() {
    return this.form.get('checkboxes') as FormArray;
  }

  onAddCheckbox() {
    this.checkboxes.push(this.fb.group({
      value: false,
      label: '',
    }));
  }

}
