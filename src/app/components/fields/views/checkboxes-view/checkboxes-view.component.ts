import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { Field } from '../../../../models/form-item.types';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes-view.component.html',
  styleUrls: ['./checkboxes-view.component.scss']
})
export class CheckboxesViewComponent {
  @Input() field: Field;
  @Input() formGroup: FormGroup;

  get options(): FormArray {
    return this.formGroup.get('options') as FormArray;
  }

}
