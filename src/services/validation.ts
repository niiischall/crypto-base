import { email } from '@sideway/address';

//Validations
const minLength = (min: number) => (value: any) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const validations = {
  required: (value: any) => (value ? undefined : 'Required'),
  minLength8: minLength(8),
  email: (value: string) =>
    value && !email.isValid(value) ? 'Invalid email address' : undefined,
};

export const setUpValidation =
  (...validators: any) =>
  (value: any) =>
    validators.reduce(
      (error: any, validator: any) => error || validator(value),
      undefined,
    );
