import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formFields = [1];
  bioSection: FormGroup;

  formConfig = {
    firstName: {title: 'First Name'},
    lastName: {title: 'Last Name'},
    age: {title: 'Age'}
  };


  getControl(config) {
    const form = {};
    for (const i in config) {
      if (config.hasOwnProperty(i)) {
        form[i] = [''];
      }
    }
    return form;
  }

  constructor(private fb: FormBuilder) {
    this.bioSection = this.fb.group(this.getControl(this.formConfig));
  }

  callingFunction() {
    console.log(this.bioSection.value);
  }

  ngOnInit() {
  }

  addFormField() {
    this.formFields.push(1);
  }

}
