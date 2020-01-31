import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {EditDialogComponent} from './edit-dialog/edit-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formFields = [1];
  bioSection: FormGroup;
  formConfig = [
    {id: 1, control: 'firstName', title: 'First Name'},
    {id: 2, control: 'lastName', title: 'Last Name'},
    {id: 3, control: 'age', title: 'Age'}
  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.bioSection = this.fb.group(this.getControl(this.formConfig));
  }

  openDialog(item): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.formConfig.findIndex(i => i.id === result.id);
        this.formConfig[index] = result;
        this.bioSection = this.fb.group(this.getControl(this.formConfig));
      }
    });
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
    this.formConfig = [...this.formConfig,  {id: 4, control: 'email', title: 'EMail'}];
    this.bioSection = this.fb.group(this.getControl(this.formConfig));
  }

  onDeleteItem(index) {
    this.formConfig.splice(index, 1);
    this.bioSection = this.fb.group(this.getControl(this.formConfig));
  }

  editControl() {

  }

}
