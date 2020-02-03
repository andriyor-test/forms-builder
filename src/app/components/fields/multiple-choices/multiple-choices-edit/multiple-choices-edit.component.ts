import {Component, Input} from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-multiple-choices-edit',
  templateUrl: './multiple-choices-edit.component.html',
  styleUrls: ['./multiple-choices-edit.component.css']
})
export class MultipleChoicesEditComponent {
  @Input() control;
  @Input() form;

  constructor(private fb: FormBuilder) {}

  get options() {
    return this.form.get('options') as FormArray;
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
