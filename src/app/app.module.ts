import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ShortAnswerComponent } from './short-answer/short-answer.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { DateComponent } from './date/date.component';
import { TimeComponent } from './time/time.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { MultipleChoicesComponent } from './multiple-choices/multiple-choices.component';
import {AnswerDirective} from './answer.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShortAnswerComponent,
    ParagraphComponent,
    DateComponent,
    TimeComponent,
    FileUploadComponent,
    CheckboxesComponent,
    MultipleChoicesComponent,
    AnswerDirective
  ],
  entryComponents: [
    ShortAnswerComponent,
    ParagraphComponent,
    DateComponent,
    TimeComponent,
    FileUploadComponent,
    CheckboxesComponent,
    MultipleChoicesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
