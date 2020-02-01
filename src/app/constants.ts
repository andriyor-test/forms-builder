import {ShortAnswerComponent} from './short-answer/short-answer.component';
import {AnswerType} from './models/answer-types.types';
import {ParagraphComponent} from './paragraph/paragraph.component';
import {DateComponent} from './date/date.component';
import {TimeComponent} from './time/time.component';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {CheckboxesComponent} from './checkboxes/checkboxes.component';
import {MultipleChoicesComponent} from './multiple-choices/multiple-choices.component';
import {DropDownComponent} from './drop-down/drop-down.component';
import {ShortAnswerEditComponent} from './short-answer-edit/short-answer-edit.component';
import {Config} from './models/config.types';
import {Validators} from '@angular/forms';
import {ParagraphEditComponent} from './paragraph-edit/paragraph-edit.component';

export const types: AnswerType[] = [
  {title: 'Short answer', component: ShortAnswerComponent, value: 'short' },
  {title: 'Paragraph', component: ParagraphComponent, value: 'paragraph'},
  {title: 'Date', component: DateComponent, value: 'date'},
  {title: 'Time', component: TimeComponent, value: 'time'},
  {title: 'File upload', component: FileUploadComponent, value: 'file-upload'},
  {title: 'Checkboxes', component: CheckboxesComponent, value: 'checkboxes'},
  {title: 'Multiple choices', component: MultipleChoicesComponent, value: 'multiple-choices'},
  {title: 'Dropdown', component: DropDownComponent, value: 'dropdown'},
];

export const edit: AnswerType[] = [
  {title: 'Short answer Edit', component: ShortAnswerEditComponent, value: 'short' },
  {title: 'Paragraph', component: ParagraphEditComponent, value: 'paragraph'},
  {title: 'Date', component: DateComponent, value: 'date'},
  {title: 'Time', component: TimeComponent, value: 'time'},
  {title: 'File upload', component: FileUploadComponent, value: 'file-upload'},
  {title: 'Checkboxes', component: CheckboxesComponent, value: 'checkboxes'},
  {title: 'Multiple choices', component: MultipleChoicesComponent, value: 'multiple-choices'},
  {title: 'Dropdown', component: DropDownComponent, value: 'dropdown'},
];

export const config: Config[] = [
  {
    id: 1,
    control: 'firstName',
    title: 'First Name',
    type: 'short',
    validation: {
      required: true,
    }
  },
  {
    id: 2,
    control: 'lastName',
    title: 'Last Name',
    type: 'short',
    validation: {
      required: true,
    }
  },
  {
    id: 3,
    control: 'age',
    title: 'Age',
    type: 'short',
    validation: {
      min: 18,
      required: true,
    }
  },
  {
    id: 4,
    control: 'about',
    title: 'About',
    type: 'paragraph',
    validation: {
      maxLength: 140,
      required: true,
    }
  }
];

export const validators = {
  min: Validators.min,
  max: Validators.max,
  required: Validators.required,
  email: Validators.email,
  maxLength: Validators.maxLength,
  minLength: Validators.minLength
};
