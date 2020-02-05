import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../../../models/form-item.types';

@Component({
  selector: 'app-date',
  templateUrl: './date-view.component.html',
  styleUrls: ['./date-view.component.css']
})
export class DateViewComponent {
  @Input() field: Field;
  @Input() formGroup: FormGroup;
}
