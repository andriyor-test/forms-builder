import { Validators } from '@angular/forms';

export const validatorsTypes = {
  min: Validators.min,
  max: Validators.max,
  required: Validators.required,
  email: Validators.email,
  maxLength: Validators.maxLength,
  minLength: Validators.minLength,
  regexp: Validators.pattern,
};
