export interface Config {
  id: number;
  control: string;
  title: string;
  type: string;
  validation?: Validation;
  options?: Option[];
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
