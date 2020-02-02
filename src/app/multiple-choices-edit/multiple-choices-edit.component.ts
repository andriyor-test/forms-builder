import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-multiple-choices-edit',
  templateUrl: './multiple-choices-edit.component.html',
  styleUrls: ['./multiple-choices-edit.component.css']
})
export class MultipleChoicesEditComponent implements OnInit {
  @Input() control;
  form;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      options: this.fb.array(this.control.options.map((option) => {
          return this.fb.group({
            value: option.value,
            label: option.label,
          });
        })
      )
    });
    console.log(this.form);
  }

  get options() {
    return this.form.get('options') as FormArray;
  }

}
