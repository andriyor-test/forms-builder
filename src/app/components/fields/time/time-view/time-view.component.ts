import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../../../models/config.types';

@Component({
  selector: 'app-time',
  templateUrl: './time-view.component.html',
  styleUrls: ['./time-view.component.css']
})
export class TimeViewComponent {
  @Input() field: Field;
  @Input() formGroup: FormGroup;
}
