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
  selectedOption;
  availableInputTypes = inputTypes;
  value;
  @Input() control;
  @Input() form;
  availableValidationControl;

  constructor() { }

  ngOnInit() {
    const controls = Object.keys(this.validation.controls);
    this.availableValidationControl = controls.filter(c => c !== 'required');
    // console.log(this.availableValidationControl);

    // // TODO: use more suitable data structure
    this.selectedInputType = this.availableInputTypes.find(type => type.value === this.control.inputType);
    if (this.control.inputType === 'email') {
      this.selectedInputType = this.availableInputTypes[1];
    }
    console.log(this.selectedInputType);

    const options = this.selectedInputType.options.map(type => type.validator);
    const controlKeys = Object.keys(this.validation);
    for (const i of options) {
      if (controlKeys.includes(i)) {
        this.selectedOption = i;
      }
    }
    this.value = this.validation[this.selectedOption];
    console.log(this.selectedOption);
    // this.control.validation['max'] = 30;
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
  }

  onRemoveValidator(validator) {
    console.log(validator);
    this.validation.removeControl(validator);
    this.availableValidationControl = this.availableValidationControl.filter(c => c !== validator);
  }

}
