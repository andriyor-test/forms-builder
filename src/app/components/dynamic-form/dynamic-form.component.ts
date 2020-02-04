import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';
import cloneDeep from 'lodash/cloneDeep';
import {validators} from '../../constants/constants';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup;
  @Input() formItem;
  formConfig;
  validators = validators;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
  }

  openDialog(configItem): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '95%',
      data: configItem,
    });
    console.log(this.formConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        const index = this.formConfig.findIndex(i => i.id === result.id);
        this.formConfig[index] = result;
        this.formConfig = cloneDeep(this.formConfig);
        this.form = this.fb.group(this.getControl(this.formConfig));
        this.form.updateValueAndValidity();
      }
    });
  }

  ngOnInit() {
    this.formConfig = this.formItem.fields;
    this.form = this.fb.group(this.getControl(this.formItem));
    console.log(this.form);
  }

  get title() {
    return this.form.get('title') as FormControl;
  }

  get description() {
    return this.form.get('description') as FormControl;
  }


  getControl(formConfig) {
    const form = {};
    form['title'] = formConfig.title;
    form['description'] = formConfig.description;

    for (const i of formConfig.fields) {
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
    this.form.updateValueAndValidity();
  }


  onDeleteItem(index) {
    this.formConfig.splice(index, 1);
    this.formConfig = cloneDeep(this.formConfig);
    this.form = this.fb.group(this.getControl(this.formConfig));
  }

}
