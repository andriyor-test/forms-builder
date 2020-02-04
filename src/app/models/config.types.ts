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

export interface FormItem {
  id: number;
  title: string;
  description: string;
  fields: Field[];
}

interface Validation {
  required?: boolean;
  email?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

interface Option {
  label: string;
  value: string | number | boolean;
}

