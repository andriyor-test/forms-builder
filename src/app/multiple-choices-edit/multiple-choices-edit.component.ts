import {Component, Input} from '@angular/core';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'app-multiple-choices-edit',
  templateUrl: './multiple-choices-edit.component.html',
  styleUrls: ['./multiple-choices-edit.component.css']
})
export class MultipleChoicesEditComponent {
  @Input() control;
  @Input() form;

  get options() {
    return this.form.get('options') as FormArray;
  }

}
