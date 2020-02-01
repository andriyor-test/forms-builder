export interface Config {
  id: number;
  control: string;
  title: string;
  type: string;
  validation?: Validation;
}

interface Validation {
  required?: boolean;
  email?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}
