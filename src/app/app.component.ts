import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {EditDialogComponent} from './edit-dialog/edit-dialog.component';
import cloneDeep from 'lodash/cloneDeep';
import {Config} from './models/config.types';
import {config, validators} from './constants/constants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  formConfig: Config[] = config;
  validators = validators;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.form = this.fb.group(this.getControl(this.formConfig));
    console.log(this.form);
  }

  openDialog(configItem): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '95%',
      data: configItem,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        const index = this.formConfig.findIndex(i => i.id === result.id);
        this.formConfig[index] = result;
        this.formConfig = cloneDeep(this.formConfig);
        this.form = this.fb.group(this.getControl(this.formConfig));
      }
    });
  }

  ngOnInit() {
  }

  getControl(formConfig) {
    const form = {};
    for (const i of formConfig) {
      const fieldValidators = [];
      for (const j in i.validation) {
        if (i.validation.hasOwnProperty(j)) {
          if (i.validation[j] === true) {
            fieldValidators.push(this.validators[j]);
          } else if (i.validation[j] === false) {
          } else {
            fieldValidators.push(this.validators[j](i.validation[j]));
          }
        }
      }
      if (i.type === 'checkboxes') {
        form[i.control] = this.fb.array(i.options.map((option) => {
            return this.fb.group({
              value: option.value,
              label: option.label,
            });
          })
        );
      } else {
        form[i.control] = new FormControl(i.value || '', fieldValidators);
      }
    }
    return form;
  }

  callingFunction() {
    console.log(this.form.value);
  }

  addFormFieldBuilder() {
    this.formConfig = [
      ...this.formConfig,
      {
        id: 20,
        control: 'email',
        title: 'EMail',
        type: 'short',
        validation: {
          email: true,
          required: true,
        }
      }];
    this.formConfig = cloneDeep(this.formConfig);
    this.form = this.fb.group(this.getControl(this.formConfig));
  }

  onDeleteItem(index) {
    this.formConfig.splice(index, 1);
    this.form = this.fb.group(this.getControl(this.formConfig));
  }

  editControl() {

  }

}
