import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {EditDialogComponent} from './edit-dialog/edit-dialog.component';
import cloneDeep from 'lodash/cloneDeep';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formFields = [1];
  bioSection: FormGroup;
  formConfig = [
    {id: 1, control: 'firstName', title: 'First Name', type: 'short', validation: ['required']},
    {id: 2, control: 'lastName', title: 'Last Name', type: 'short'},
    {id: 3, control: 'age', title: 'Age', type: 'short'}
  ];

  // valid = {
  //   required: Validators.required,
  //   email: Validators.email
  // }

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.bioSection = this.fb.group(this.getControl(this.formConfig));
    console.log(this.bioSection);
  }

  openDialog(item): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '95%',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.formConfig.findIndex(i => i.id === result.id);
        this.formConfig[index] = result;
        this.formConfig = cloneDeep(this.formConfig);
        this.bioSection = this.fb.group(this.getControl(this.formConfig));
      }
    });
  }

  ngOnInit() {
    console.log(this.bioSection);
  }

  getControl(config) {
    const form = {};
    for (const i of config) {
      form[i.control] = ['', Validators.compose([Validators.required])];
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
    this.formConfig = [...this.formConfig,  {id: 4, control: 'email', title: 'EMail', type: 'short'}];
    this.formConfig = cloneDeep(this.formConfig);
    this.bioSection = this.fb.group(this.getControl(this.formConfig));
  }

  onDeleteItem(index) {
    this.formConfig.splice(index, 1);
    this.bioSection = this.fb.group(this.getControl(this.formConfig));
  }

  editControl() {

  }

}
