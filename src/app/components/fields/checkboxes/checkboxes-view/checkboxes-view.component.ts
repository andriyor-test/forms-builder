import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Field } from '../../../../models/config.types';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes-view.component.html',
  styleUrls: ['./checkboxes-view.component.css']
})
export class CheckboxesViewComponent {
  @Input() field: Field;
  @Input() formGroup: FormGroup;

  get options() {
    return this.formGroup.get('options') as FormArray;
  }

}
