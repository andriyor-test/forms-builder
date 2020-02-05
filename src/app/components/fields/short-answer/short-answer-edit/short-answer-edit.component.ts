import { Component, Input, OnInit } from '@angular/core';
import { inputTypes } from '../../../../constants/input-types';
import { FormControl, FormGroup } from '@angular/forms';
import { Field } from '../../../../models/form-item.types';
import { InputType } from '../../../../models/input.types';

@Component({
  selector: 'app-short-answer-edit',
  templateUrl: './short-answer-edit.component.html',
  styleUrls: ['./short-answer-edit.component.css']
})
export class ShortAnswerEditComponent implements OnInit {
  selectedInputType;
  availableInputTypes: InputType[] = inputTypes;
  @Input() field: Field;
  @Input() formGroup: FormGroup;
  availableValidationControl;

  ngOnInit() {
    this.availableValidationControl = Object.keys(this.validation.controls);
    this.selectedInputType = this.availableInputTypes.find(type => type.value === this.field.inputType);
    if (this.field.inputType === 'email') {
      this.selectedInputType = this.availableInputTypes[1];
      this.formGroup.controls.inputType.setValue('text');
    }
  }

  get inputType() {
    return this.formGroup.get('inputType') as FormControl;
  }

  get validation() {
    return this.formGroup.get('validation') as FormGroup;
  }

  onValueChange() {
    this.selectedInputType = this.availableInputTypes.find(type => type.value === this.inputType.value);
    if (this.field.inputType === 'email') {
      this.selectedInputType = this.availableInputTypes[1];
    }
    for (const c of this.availableValidationControl) {
      this.validation.removeControl(c);
    }
    this.availableValidationControl = [];
  }

  onRemoveValidator(validator) {
    this.validation.removeControl(validator);
    this.availableValidationControl = this.availableValidationControl.filter(c => c !== validator);
  }

  onAddValidator() {
    if (this.inputType.value === 'text') {
      const textDefault = 'maxLength';
      this.availableValidationControl.push(textDefault);
      this.validation.addControl(textDefault,  new FormControl(''));
    } else if (this.inputType.value === 'number') {
      const numberDefault = 'max';
      this.availableValidationControl.push(numberDefault);
      this.validation.addControl(numberDefault,  new FormControl(''));
    }
  }

  onValidatorTypeChange(value, i) {
    this.validation.removeControl(this.availableValidationControl[i]);
    this.availableValidationControl.splice(i, 1);
    if (value === 'email') {
      this.validation.addControl(value,  new FormControl(true));
    } else {
      this.validation.addControl(value,  new FormControl(''));
    }
    this.availableValidationControl.push(value);
  }

}
