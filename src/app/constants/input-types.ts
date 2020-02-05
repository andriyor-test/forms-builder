import { InputType } from '../models/input.types';

export const inputTypes: InputType[] = [
  {
    title: 'Number',
    value: 'number',
    options: [
      {title: 'Greater then', validator: 'min'},
      {title: 'Less than', validator: 'max'},
    ]
  },
  {
    title: 'Text',
    value: 'text',
    options: [
      {title: 'Email address', validator: 'email'},
      {title: 'Maximum character count', validator: 'maxLength'},
      {title: 'Minimum character count', validator: 'minLength'},
      {title: 'Regular expression', validator: 'regexp'},
    ]
  },
];
