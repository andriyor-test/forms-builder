import { Injectable } from '@angular/core';
import { forms } from '../constants/constants';
import { Observable, of } from 'rxjs';
import { FormItem } from '../models/config.types';

@Injectable()
export class FormService {
  forms: FormItem[] = forms;

  getForms(): Observable<FormItem[]> {
    return of(this.forms);
  }
}
