import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { FormService } from './services/form.service';

import { ShortAnswerViewComponent } from './components/fields/short-answer/short-answer-view/short-answer-view.component';
import { ParagraphViewComponent } from './components/fields/paragraph/paragraph-view/paragraph-view.component';
import { DateViewComponent } from './components/fields/date/date-view/date-view.component';
import { TimeViewComponent } from './components/fields/time/time-view/time-view.component';
import { FileUploadViewComponent } from './components/fields/file-upload/file-upload-view/file-upload-view.component';
import { CheckboxesViewComponent } from './components/fields/checkboxes/checkboxes-view/checkboxes-view.component';
import { MultipleChoicesViewComponent } from './components/fields/multiple-choices/multiple-choices-view/multiple-choices-view.component';
import { DropDownViewComponent } from './components/fields/drop-down/drop-down-view/drop-down-view.component';
import { FormItemComponent } from './components/form-item/form-item.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { DynamicControlComponent } from './components/dynamic-control/dynamic-control.component';
import { ShortAnswerEditComponent } from './components/fields/short-answer/short-answer-edit/short-answer-edit.component';
import { ParagraphEditComponent } from './components/fields/paragraph/paragraph-edit/paragraph-edit.component';
import { DateEditComponent } from './components/fields/date/date-edit/date-edit.component';
import { TimeEditComponent } from './components/fields/time/time-edit/time-edit.component';
import { DropdownEditComponent } from './components/fields/drop-down/dropdown-edit/dropdown-edit.component';
import { MultipleChoicesEditComponent } from './components/fields/multiple-choices/multiple-choices-edit/multiple-choices-edit.component';
import { CheckboxesEditComponent } from './components/fields/checkboxes/checkboxes-edit/checkboxes-edit.component';
import { FileUploadEditComponent } from './components/fields/file-upload/file-upload-edit/file-upload-edit.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';

import { AppComponent } from './app.component';
import { AnswerDirective } from './answer.directive';


@NgModule({
  declarations: [
    AppComponent,
    ShortAnswerViewComponent,
    ParagraphViewComponent,
    DateViewComponent,
    TimeViewComponent,
    FileUploadViewComponent,
    CheckboxesViewComponent,
    MultipleChoicesViewComponent,
    AnswerDirective,
    DropDownViewComponent,
    FormItemComponent,
    EditDialogComponent,
    DynamicControlComponent,
    ShortAnswerEditComponent,
    ParagraphEditComponent,
    DateEditComponent,
    TimeEditComponent,
    DropdownEditComponent,
    MultipleChoicesEditComponent,
    CheckboxesEditComponent,
    FileUploadEditComponent,
    DynamicFormComponent,
    DynamicFormsComponent,
  ],
  entryComponents: [
    ShortAnswerViewComponent,
    ParagraphViewComponent,
    DateViewComponent,
    TimeViewComponent,
    FileUploadViewComponent,
    CheckboxesViewComponent,
    MultipleChoicesViewComponent,
    DropDownViewComponent,
    EditDialogComponent,
    ShortAnswerEditComponent,
    ParagraphEditComponent,
    DateEditComponent,
    TimeEditComponent,
    DropdownEditComponent,
    MultipleChoicesEditComponent,
    CheckboxesEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule,
    NgxMaterialTimepickerModule,
    FileUploadModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatRadioModule,
    MatExpansionModule
  ],
  providers: [
    MatDatepickerModule,
    FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
