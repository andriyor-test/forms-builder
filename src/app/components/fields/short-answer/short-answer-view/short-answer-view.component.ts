import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../../../models/form-item.types';

@Component({
  selector: 'app-short-answer',
  templateUrl: './short-answer-view.component.html',
  styleUrls: ['./short-answer-view.component.css']
})
export class ShortAnswerViewComponent {
  @Input() field: Field;
  @Input() formGroup: FormGroup;
}
