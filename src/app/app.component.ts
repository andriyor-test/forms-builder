import {Component} from '@angular/core';
import {forms} from './constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  forms = forms;

  onAddForm() {
    this.forms.push({title: 'Form3 title', description: 'Form3 description', fields: []});
  }
}
