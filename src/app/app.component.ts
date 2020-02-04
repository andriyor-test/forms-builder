import {Component} from '@angular/core';
import {forms} from './constants/constants';
import cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  forms = forms;

  onAddForm() {
    this.forms.push({id: 33, title: 'Form3 title', description: 'Form3 description', fields: []});
  }

  onFormUpdate(item, index) {
    this.forms[index] = item;
    this.forms = cloneDeep(this.forms);
  }
}
