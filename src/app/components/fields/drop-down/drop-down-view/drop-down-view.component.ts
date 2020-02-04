import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../../../models/config.types';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down-view.component.html',
  styleUrls: ['./drop-down-view.component.css']
})
export class DropDownViewComponent {
  @Input() field: Field;
  @Input() formGroup: FormGroup;
}
