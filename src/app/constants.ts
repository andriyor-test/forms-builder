import {ShortAnswerComponent} from './short-answer/short-answer.component';
import {AnswerType} from './models/answer-types.types';
import {ParagraphComponent} from './paragraph/paragraph.component';
import {DateComponent} from './date/date.component';
import {TimeComponent} from './time/time.component';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {CheckboxesComponent} from './checkboxes/checkboxes.component';
import {MultipleChoicesComponent} from './multiple-choices/multiple-choices.component';

export const types: AnswerType[] = [
  {title: 'Short answer', component: ShortAnswerComponent },
  {title: 'Paragraph', component: ParagraphComponent},
  {title: 'Date', component: DateComponent},
  {title: 'Time', component: TimeComponent},
  {title: 'File upload', component: FileUploadComponent},
  {title: 'Checkboxes', component: CheckboxesComponent},
  {title: 'Multiple choices', component: MultipleChoicesComponent},
];
