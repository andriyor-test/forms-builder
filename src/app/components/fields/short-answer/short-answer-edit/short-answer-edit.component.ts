import {Component, Input, OnInit} from '@angular/core';
import {inputTypes} from '../../../../constants/constants';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-short-answer-edit',
  templateUrl: './short-answer-edit.component.html',
  styleUrls: ['./short-answer-edit.component.css']
})
export class ShortAnswerEditComponent implements OnInit {
  selectedInputType;
  selected;
  availableInputTypes = inputTypes;
  @Input() control;
  @Input() form;
  availableValidationControl;

  constructor() { }

  ngOnInit() {
    this.availableValidationControl = Object.keys(this.validation.controls);
    this.selectedInputType = this.availableInputTypes.find(type => type.value === this.control.inputType);
    if (this.control.inputType === 'email') {
      this.selectedInputType = this.availableInputTypes[1];
      this.form.controls.inputType.setValue('text');
    }
  }

  get inputType() {
    return this.form.get('inputType') as FormControl;
  }

  get validation() {
    return this.form.get('validation') as FormGroup;
  }

  onValueChange() {
    this.selectedInputType = this.availableInputTypes.find(type => type.value === this.inputType.value);
    if (this.control.inputType === 'email') {
      this.selectedInputType = this.availableInputTypes[1];
    }
    for (const c of this.availableValidationControl) {
      this.validation.removeControl(c);
    }
    this.availableValidationControl = [];
  }

  onRemoveValidator(validator) {
    console.log(validator);
    this.validation.removeControl(validator);
    this.availableValidationControl = this.availableValidationControl.filter(c => c !== validator);
  }

  onAddValidator() {
    if (this.inputType.value === 'text') {
      this.availableValidationControl.push('maxLength');
      this.validation.addControl('maxLength',  new FormControl(''));
    } else if (this.inputType.value === 'number') {
      this.availableValidationControl.push('max');
      this.validation.addControl('max',  new FormControl(''));
    }
  }

  onValidatorTypeChange(value, i) {
    console.log(value, i);
    console.log(this.availableValidationControl[i]);
    this.validation.removeControl(this.availableValidationControl[i]);
    this.availableValidationControl.splice(i, 1);
    if (value === 'email') {
      this.validation.addControl('email',  new FormControl(true));
    } else {
      this.validation.addControl(value,  new FormControl(''));
    }
    this.availableValidationControl.push(value);
  }

}
