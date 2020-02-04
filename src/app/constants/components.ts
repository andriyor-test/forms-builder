import { ComponentType } from '../models/answer-types.types';

import { ShortAnswerViewComponent } from '../components/fields/short-answer/short-answer-view/short-answer-view.component';
import { ShortAnswerEditComponent } from '../components/fields/short-answer/short-answer-edit/short-answer-edit.component';

import { ParagraphViewComponent } from '../components/fields/paragraph/paragraph-view/paragraph-view.component';
import { ParagraphEditComponent } from '../components/fields/paragraph/paragraph-edit/paragraph-edit.component';

import { DateViewComponent } from '../components/fields/date/date-view/date-view.component';
import { DateEditComponent } from '../components/fields/date/date-edit/date-edit.component';

import { TimeViewComponent } from '../components/fields/time/time-view/time-view.component';
import { TimeEditComponent } from '../components/fields/time/time-edit/time-edit.component';

import { FileUploadViewComponent } from '../components/fields/file-upload/file-upload-view/file-upload-view.component';
import { FileUploadEditComponent } from '../components/fields/file-upload/file-upload-edit/file-upload-edit.component';

import { CheckboxesViewComponent } from '../components/fields/checkboxes/checkboxes-view/checkboxes-view.component';
import { CheckboxesEditComponent } from '../components/fields/checkboxes/checkboxes-edit/checkboxes-edit.component';

import { MultipleChoicesViewComponent } from '../components/fields/multiple-choices/multiple-choices-view/multiple-choices-view.component';
import { MultipleChoicesEditComponent } from '../components/fields/multiple-choices/multiple-choices-edit/multiple-choices-edit.component';

import { DropDownViewComponent } from '../components/fields/drop-down/drop-down-view/drop-down-view.component';
import { DropdownEditComponent } from '../components/fields/drop-down/dropdown-edit/dropdown-edit.component';

export const components: ComponentType[] = [
  {
    title: 'Short answer',
    viewComponent: ShortAnswerViewComponent,
    editComponent: ShortAnswerEditComponent,
    value: 'short',
  },
  {
    title: 'Paragraph',
    viewComponent: ParagraphViewComponent,
    editComponent: ParagraphEditComponent,
    value: 'paragraph',
  },
  {
    title: 'Date',
    viewComponent: DateViewComponent,
    editComponent: DateEditComponent,
    value: 'date',
  },
  {
    title: 'Time',
    viewComponent: TimeViewComponent,
    editComponent: TimeEditComponent,
    value: 'time',
  },
  {
    title: 'File upload',
    viewComponent: FileUploadViewComponent,
    editComponent: FileUploadEditComponent,
    value: 'file-upload',
  },
  {
    title: 'Checkboxes',
    viewComponent: CheckboxesViewComponent,
    editComponent: CheckboxesEditComponent,
    value: 'checkboxes',
  },
  {
    title: 'Multiple choices',
    viewComponent: MultipleChoicesViewComponent,
    editComponent: MultipleChoicesEditComponent,
    value: 'multiple-choices',
  },
  {
    title: 'Dropdown',
    viewComponent: DropDownViewComponent,
    editComponent: DropdownEditComponent,
    value: 'dropdown',
  },
];
