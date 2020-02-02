import {Component, Inject} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';

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
      validation:   this.fb.group({
        required: [data.validation.required],
      }),
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  onApply() {
    console.log(this.data);
    this.editForm.controls.type.setValue(this.data.type);
    this.dialogRef.close(this.editForm.value);
  }

}
