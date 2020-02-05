import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Field } from '../../../../models/form-item.types';

@Component({
  selector: 'app-checkboxes-edit',
  templateUrl: './checkboxes-edit.component.html',
  styleUrls: ['./checkboxes-edit.component.css']
})
export class CheckboxesEditComponent {
  @Input() field: Field;
  @Input() formGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  get options() {
    return this.formGroup.get('options') as FormArray;
  }

  onAddCheckbox() {
    this.options.push(this.fb.group({
      value: false,
      label: '',
    }));
  }

  onRemoveCheckbox(i) {
    this.options.removeAt(i);
  }

}
