import {Component, Input, OnInit} from '@angular/core';
import {inputTypes} from '../constants/constants';

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

  constructor() { }

  ngOnInit() {
    // TODO: use more suitable data structure
    this.selectedInputType = this.availableInputTypes.find(type => type.value === this.control.inputType);
    if (this.control.inputType === 'email') {
      this.selectedInputType = this.availableInputTypes[1];
    }

    const options = this.selectedInputType.options.map(type => type.validator);
    const controlKeys = Object.keys(this.control.validation);
    for (const i of options) {
      if (controlKeys.includes(i)) {
        this.selectedOption = i;
      }
    }
    this.value = this.control.validation[this.selectedOption];
  }

  onValueChange() {

  }

}
