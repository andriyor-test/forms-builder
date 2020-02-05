import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../../../models/form-item.types';

@Component({
  selector: 'app-time',
  templateUrl: './time-view.component.html',
  styleUrls: ['./time-view.component.scss']
})
export class TimeViewComponent {
  @Input() field: Field;
  @Input() formGroup: FormGroup;
}
