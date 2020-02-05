import { Option } from './option.type';

export interface FormItem {
  id: number;
  title: string;
  description: string;
  fields: Field[];
}

export interface Field {
  id: number;
  control: string;
  title: string;
  value?: number | string | boolean;
  type: string;
  inputType?: string;
  validation?: Validation;
  options?: Option[];
}
