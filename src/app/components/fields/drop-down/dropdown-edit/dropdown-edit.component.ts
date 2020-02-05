import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Field } from '../../../../models/form-item.types';

@Component({
  selector: 'app-dropdown-edit',
  templateUrl: './dropdown-edit.component.html',
  styleUrls: ['./dropdown-edit.component.css']
})
export class DropdownEditComponent {
  @Input() field: Field;
  @Input() formGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  get options() {
    return this.formGroup.get('options') as FormArray;
  }

  onAddOption() {
    this.options.push(this.fb.group({
      value: '',
      label: '',
    }));
  }

  onRemoveItem(i) {
    this.options.removeAt(i);
  }

}
