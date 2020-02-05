import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { forms } from '../constants/form-data';
import { FormItem } from '../models/form-item.types';

@Injectable()
export class FormService {
  forms: FormItem[] = forms;

  getForms(): Observable<FormItem[]> {
    return of(this.forms);
  }
}
