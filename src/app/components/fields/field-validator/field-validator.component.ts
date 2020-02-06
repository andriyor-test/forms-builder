import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { inputTypes } from '../../../constants/input-types';

import { Field } from '../../../models/form-item.types';
import { InputType } from '../../../models/input.types';


@Component({
  selector: 'app-field-validator',
  templateUrl: './field-validator.component.html',
  styleUrls: ['./field-validator.component.scss']
})
export class FieldValidatorComponent implements OnInit {
  selectedInputType;
  availableInputTypes: InputType[] = inputTypes;
  @Input() field: Field;
  @Input() formGroup: FormGroup;
  availableValidationControl;

  ngOnInit(): void {
    this.availableValidationControl = Object.keys(this.validation.controls);
    this.selectedInputType = this.availableInputTypes.find(type => type.value === this.field.inputType);
    if (this.field.inputType === 'email') {
      this.selectedInputType = this.availableInputTypes[1];
      this.formGroup.controls.inputType.setValue('text');
    }
  }

  get inputType(): FormControl {
    return this.formGroup.get('inputType') as FormControl;
  }

  get validation(): FormGroup {
    return this.formGroup.get('validation') as FormGroup;
  }

  onValueChange(): void {
    this.selectedInputType = this.availableInputTypes.find(type => type.value === this.inputType.value);
    if (this.field.inputType === 'email') {
      this.selectedInputType = this.availableInputTypes[1];
    }
    for (const control of this.availableValidationControl) {
      this.validation.removeControl(control);
    }
    this.availableValidationControl = [];
  }

  onRemoveValidator(validator): void {
    this.validation.removeControl(validator);
    this.availableValidationControl = this.availableValidationControl.filter(control => control !== validator);
  }

  onAddValidator(): void {
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

  onValidatorTypeChange(value, index): void {
    this.validation.removeControl(this.availableValidationControl[index]);
    this.availableValidationControl.splice(index, 1);
    if (value === 'email') {
      this.validation.addControl(value,  new FormControl(true));
    } else {
      this.validation.addControl(value,  new FormControl(''));
    }
    this.availableValidationControl.push(value);
  }

}
