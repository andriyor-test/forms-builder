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
  {title: 'Paragraph', component: ParagraphComponent, value: 'paragraph'},
  {title: 'Date', component: DateComponent, value: 'date'},
  {title: 'Time', component: TimeComponent, value: 'time'},
  {title: 'File upload', component: FileUploadComponent, value: 'file-upload'},
  {title: 'Checkboxes', component: CheckboxesComponent, value: 'checkboxes'},
  {title: 'Multiple choices', component: MultipleChoicesComponent, value: 'multiple-choices'},
  {title: 'Dropdown', component: DropDownComponent, value: 'dropdown'},
];
