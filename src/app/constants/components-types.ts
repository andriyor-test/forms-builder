import { ShortAnswerViewComponent } from '../components/fields/views/short-answer-view/short-answer-view.component';

import { ParagraphViewComponent } from '../components/fields/views/paragraph-view/paragraph-view.component';
import { DateViewComponent } from '../components/fields/views/date-view/date-view.component';
import { TimeViewComponent } from '../components/fields/views/time-view/time-view.component';
import { CheckboxesViewComponent } from '../components/fields/views/checkboxes-view/checkboxes-view.component';
import { MultipleChoicesViewComponent } from '../components/fields/views/multiple-choices-view/multiple-choices-view.component';

import { DropDownViewComponent } from '../components/fields/views/drop-down-view/drop-down-view.component';
import { DropdownEditComponent } from '../components/fields/dropdown-edit/dropdown-edit.component';

import { ComponentType } from '../models/component.types';

export const componentsTypes: ComponentType[] = [
  {
    title: 'Short answer',
    viewComponent: ShortAnswerViewComponent,
    value: 'short',
  },
  {
    title: 'Paragraph',
    viewComponent: ParagraphViewComponent,
    value: 'paragraph',
  },
  {
    title: 'Date',
    viewComponent: DateViewComponent,
    value: 'date',
  },
  {
    title: 'Time',
    viewComponent: TimeViewComponent,
    value: 'time',
  },
  {
    title: 'Checkboxes',
    viewComponent: CheckboxesViewComponent,
    value: 'checkboxes',
  },
  {
    title: 'Multiple choices',
    viewComponent: MultipleChoicesViewComponent,
    value: 'multiple-choices',
  },
  {
    title: 'Dropdown',
    viewComponent: DropDownViewComponent,
    editComponent: DropdownEditComponent,
    value: 'dropdown',
  },
];
