import { Type } from '@angular/core';

export interface ComponentType {
  title: string;
  viewComponent: Type<any>;
  editComponent?: Type<any>;
  value: string;
}
