import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';
import cloneDeep from 'lodash/cloneDeep';
import {validators} from '../../constants/constants';
import {FormItem} from '../../models/config.types';

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
  validators = validators;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
  }

  openDialog(configItem): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '95%',
      data: configItem,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.formItem.fields.findIndex(i => i.id === result.id);
        this.formItem.fields[index] = result;
        this.updateForm.emit(this.formItem);
      }
    });
  }

  ngOnInit() {
    this.formConfig = this.formItem.fields;
    this.form = this.fb.group(this.getControl(this.formItem));
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
  }

  addFormFieldBuilder() {
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


  onDeleteItem(index) {
    this.formItem.fields.splice(index, 1);
    this.formItem = cloneDeep(this.formItem);
    this.form = this.fb.group(this.getControl(this.formItem));
  }

}
