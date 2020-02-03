import {Component, Input} from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dropdown-edit',
  templateUrl: './dropdown-edit.component.html',
  styleUrls: ['./dropdown-edit.component.css']
})
export class DropdownEditComponent {
  @Input() control;
  @Input() form;

  constructor(private fb: FormBuilder) {}

  get options() {
    return this.form.get('options') as FormArray;
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
