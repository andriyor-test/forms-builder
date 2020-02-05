import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Field } from '../../../../models/form-item.types';

@Component({
  selector: 'app-multiple-choices-edit',
  templateUrl: './multiple-choices-edit.component.html',
  styleUrls: ['./multiple-choices-edit.component.css']
})
export class MultipleChoicesEditComponent {
  @Input() field: Field;
  @Input() formGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  get options() {
    return this.formGroup.get('options') as FormArray;
  }

  onAddRadio() {
    this.options.push(this.fb.group({
      value: '',
      label: '',
    }));
  }

  onRemoveOption(i) {
    this.options.removeAt(i);
  }

}
