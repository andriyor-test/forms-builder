import { Type } from '@angular/core';

export interface AnswerType {
  title: string;
  component: Type<any>;
  value: string;
}
