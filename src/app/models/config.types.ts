export interface Config {
  id: number;
  control: string;
  title: string;
  value?: number | string | boolean;
  type: string;
  inputType?: string;
  validation?: Validation;
  options?: Option[];
  checkboxes?: Checkbox[];
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
  value: string | number;
}

interface Checkbox {
  label: string;
  value: boolean;
}
