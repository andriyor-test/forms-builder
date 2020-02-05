import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import cloneDeep from 'lodash/cloneDeep';

import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { validatorsTypes } from '../../constants/validators-types';
import { FormItem } from '../../models/form-item.types';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup;
  @Input() formItem: FormItem;
  @Output() updateForm = new EventEmitter();
  formConfig;
  validators = validatorsTypes;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
  }

  openDialog(configItem): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '95%',
      data: configItem,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.formItem.fields.findIndex(field => field.id === result.id);
        this.formItem.fields[index] = result;
        this.updateForm.emit(this.formItem);
      }
    });
  }

  ngOnInit(): void {
    this.formConfig = this.formItem.fields;
    this.form = this.fb.group(this.getControl(this.formItem));
  }

  get title(): FormControl {
    return this.form.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.form.get('description') as FormControl;
  }

  getControl(formConfig): any {
    const form = {};
    form['title'] = formConfig.title;
    form['description'] = formConfig.description;

    for (const field of formConfig.fields) {
      const fieldValidators = [];
      for (const validationKey in field.validation) {
        if (field.validation.hasOwnProperty(validationKey)) {
          if (field.validation[validationKey] === true) {
            fieldValidators.push(this.validators[validationKey]);
          } else if (field.validation[validationKey] === false) {
          } else {
            fieldValidators.push(this.validators[validationKey](field.validation[validationKey]));
          }
        }
      }
      if (field.type === 'checkboxes') {
        form[field.control] = this.fb.array(field.options.map((option) => {
            return this.fb.group({
              value: option.value,
              label: option.label,
            });
          })
        );
      } else {
        form[field.control] = new FormControl(field.value || '', fieldValidators);
      }
    }
    return form;
  }

  addFormFieldBuilder(): void {
    this.formItem.fields = [
      ...this.formItem.fields,
      {
        id: 22,
        control: 'paragraph2',
        title: 'EMail',
        type: 'paragraph',
        validation: {
          email: true,
          required: true,
        }
      }];
    this.updateForm.emit(this.formItem);
    this.form = this.fb.group(this.getControl(this.formItem));
    this.form.updateValueAndValidity();
  }

  onDeleteItem(index): void {
    this.formItem.fields.splice(index, 1);
    this.formItem = cloneDeep(this.formItem);
    this.form = this.fb.group(this.getControl(this.formItem));
  }

}
