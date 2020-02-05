import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../../../models/form-item.types';

@Component({
  selector: 'app-multiple-choices',
  templateUrl: './multiple-choices-view.component.html',
  styleUrls: ['./multiple-choices-view.component.css']
})
export class MultipleChoicesViewComponent {
  @Input() field: Field;
  @Input() formGroup: FormGroup;

}
