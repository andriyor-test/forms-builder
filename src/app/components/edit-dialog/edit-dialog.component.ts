import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  editForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.editForm = this.fb.group({
      id: [data.id],
      control: [data.control],
      title: [data.title],
      type: [data.type],
      inputType: [data.inputType],
      validation:   this.fb.group({}),
    });
    for (const validationKey in data.validation) {
      if (data.validation.hasOwnProperty(validationKey)) {
        this.validation.addControl(validationKey,  new FormControl(data.validation[validationKey]));
      }
    }
    if (data.options) {
      this.editForm.addControl('options', this.fb.array(data.options.map((option) => {
          return this.fb.group({
            value: option.value,
            label: option.label,
          });
        })
      ));
    } else {
      this.editForm.addControl('options', this.fb.array([]));
    }
  }

  get validation(): FormGroup {
    return this.editForm.get('validation') as FormGroup;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  onApply(): void {
    this.editForm.controls.type.setValue(this.data.type);
    this.dialogRef.close(this.editForm.value);
  }

}
