import {AnswerType} from '../models/answer-types.types';
import {ShortAnswerViewComponent} from '../components/fields/short-answer/short-answer-view/short-answer-view.component';
import {ParagraphViewComponent} from '../components/fields/paragraph/paragraph-view/paragraph-view.component';
import {DateViewComponent} from '../components/fields/date/date-view/date-view.component';
import {TimeViewComponent} from '../components/fields/time/time-view/time-view.component';
import {FileUploadComponent} from '../components/fields/file-upload/file-upload.component';
import {CheckboxesViewComponent} from '../components/fields/checkboxes/checkboxes-view/checkboxes-view.component';
import {MultipleChoicesViewComponent} from '../components/fields/multiple-choices/multiple-choices-view/multiple-choices-view.component';
import {DropDownViewComponent} from '../components/fields/drop-down/drop-down-view/drop-down-view.component';
import {ShortAnswerEditComponent} from '../components/fields/short-answer/short-answer-edit/short-answer-edit.component';
import {ParagraphEditComponent} from '../components/fields/paragraph/paragraph-edit/paragraph-edit.component';
import {DateEditComponent} from '../components/fields/date/date-edit/date-edit.component';
import {TimeEditComponent} from '../components/fields/time/time-edit/time-edit.component';
import {DropdownEditComponent} from '../components/fields/drop-down/dropdown-edit/dropdown-edit.component';
import {MultipleChoicesEditComponent} from '../components/fields/multiple-choices/multiple-choices-edit/multiple-choices-edit.component';
import {CheckboxesEditComponent} from '../components/fields/checkboxes/checkboxes-edit/checkboxes-edit.component';

export const types: AnswerType[] = [
  {title: 'Short answer', component: ShortAnswerViewComponent, value: 'short' },
  {title: 'Paragraph', component: ParagraphViewComponent, value: 'paragraph'},
  {title: 'Date', component: DateViewComponent, value: 'date'},
  {title: 'Time', component: TimeViewComponent, value: 'time'},
  {title: 'File upload', component: FileUploadComponent, value: 'file-upload'},
  {title: 'Checkboxes', component: CheckboxesViewComponent, value: 'checkboxes'},
  {title: 'Multiple choices', component: MultipleChoicesViewComponent, value: 'multiple-choices'},
  {title: 'Dropdown', component: DropDownViewComponent, value: 'dropdown'},
];

export const edit: AnswerType[] = [
  {title: 'Short answer Edit', component: ShortAnswerEditComponent, value: 'short' },
  {title: 'Paragraph', component: ParagraphEditComponent, value: 'paragraph'},
  {title: 'Date', component: DateEditComponent, value: 'date'},
  {title: 'Time', component: TimeEditComponent, value: 'time'},
  {title: 'File upload', component: FileUploadComponent, value: 'file-upload'},
  {title: 'Checkboxes', component: CheckboxesEditComponent, value: 'checkboxes'},
  {title: 'Multiple choices', component: MultipleChoicesEditComponent, value: 'multiple-choices'},
  {title: 'Dropdown', component: DropdownEditComponent, value: 'dropdown'},
];
