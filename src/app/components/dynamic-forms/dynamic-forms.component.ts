import { Component, OnInit } from '@angular/core';

import cloneDeep from 'lodash/cloneDeep';

import { FormService } from '../../services/form.service';
import { FormItem } from '../../models/form-item.types';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {
  forms: FormItem[];

  constructor(private formService: FormService) {
  }

  ngOnInit(): void {
    this.formService.getForms().subscribe(forms => {
      this.forms = forms;
    });
  }

  onAddForm() {
    this.forms.push({id: 33, title: 'Form3 title', description: 'Form3 description', fields: []});
  }

  onFormUpdate(item, index) {
    this.forms[index] = item;
    this.forms = cloneDeep(this.forms);
  }

}
