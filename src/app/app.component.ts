import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formFields = [1];
  bioSection: FormGroup;
  formConfig = [
    {control: 'firstName', title: 'First Name'},
    {control: 'lastName', title: 'Last Name'},
    {control: 'age', title: 'Age'}
  ];

  constructor(private fb: FormBuilder) {
    this.bioSection = this.fb.group(this.getControl(this.formConfig));
    console.log(this.bioSection);
  }

  ngOnInit() {
  }

  getControl(config) {
    const form = {};
    for (const i of config) {
      form[i.control] = [''];
    }
    return form;
  }

  callingFunction() {
    console.log(this.bioSection.value);
  }

  addFormField() {
    this.formFields.push(1);
  }

  addFormFieldBuilder() {
    this.formConfig = [...this.formConfig,  {control: 'email', title: 'EMail'}];
    this.bioSection = this.fb.group(this.getControl(this.formConfig));
  }

}
