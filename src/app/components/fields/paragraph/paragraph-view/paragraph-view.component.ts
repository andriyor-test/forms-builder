import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../../../models/form-item.types';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph-view.component.html',
  styleUrls: ['./paragraph-view.component.scss']
})
export class ParagraphViewComponent {
  @Input() field: Field;
  @Input() formGroup: FormGroup;

}
