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

import { ShortAnswerViewComponent } from './components/fields/views/short-answer-view/short-answer-view.component';
import { ParagraphViewComponent } from './components/fields/views/paragraph-view/paragraph-view.component';
import { DateViewComponent } from './components/fields/views/date-view/date-view.component';
import { TimeViewComponent } from './components/fields/views/time-view/time-view.component';
import { CheckboxesViewComponent } from './components/fields/views/checkboxes-view/checkboxes-view.component';
import { MultipleChoicesViewComponent } from './components/fields/views/multiple-choices-view/multiple-choices-view.component';
import { DropDownViewComponent } from './components/fields/views/drop-down-view/drop-down-view.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { DynamicControlComponent } from './components/dynamic-control/dynamic-control.component';
import { ShortAnswerEditComponent } from './components/fields/editors/short-answer-edit/short-answer-edit.component';
import { DropdownEditComponent } from './components/fields/editors/dropdown-edit/dropdown-edit.component';
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
    CheckboxesViewComponent,
    MultipleChoicesViewComponent,
    AnswerDirective,
    DropDownViewComponent,
    EditDialogComponent,
    DynamicControlComponent,
    ShortAnswerEditComponent,
    DropdownEditComponent,
    DynamicFormComponent,
    DynamicFormsComponent,
  ],
  entryComponents: [
    ShortAnswerViewComponent,
    ParagraphViewComponent,
    DateViewComponent,
    TimeViewComponent,
    CheckboxesViewComponent,
    MultipleChoicesViewComponent,
    DropDownViewComponent,
    EditDialogComponent,
    ShortAnswerEditComponent,
    DropdownEditComponent,
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
