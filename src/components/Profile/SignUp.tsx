import React from 'react';
import { Form, Field } from 'react-final-form';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FormInput from '../FormInput';
import { normalizeText } from '../../services/helpers';
import { validations, setUpValidation } from '../../services/validation';

export interface Props {
  toggleForm: Function;
}

const useStyles = makeStyles((theme) => ({
  signUpContainer: {
    height: '100%',
    padding: 30,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 22,
    lineHeight: '32px',
    fontWeight: 700,
    letterSpacing: '1px',
    marginRight: 'auto',
  },
  headerButton: {
    color: '#4A6EE0',
    fontSize: 14,
    lineHeight: '22px',
    backgroundColor: '#fff',
    border: 'none',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  form: {
    marginTop: 50,
  },
  submitButton: {
    marginTop: 15,
    width: '100%',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '14px',
    textTransform: 'capitalize',
    backgroundColor: '#11a683',
  },
}));

export const SignUp: React.FC<Props> = ({ toggleForm }) => {
  const classes = useStyles();

  const handleSubmit = (values: any) => {
    console.log('Submitted!');
    console.log(values);
  };

  return (
    <div className={classes.signUpContainer}>
      <div className={classes.header}>
        <span className={classes.heading}>Sign up</span>
        <button className={classes.headerButton} onClick={() => toggleForm()}>
          I have an account
        </button>
      </div>
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit, valid }) => (
          <form className={classes.form}>
            <Field
              component={FormInput}
              format={normalizeText}
              fullWidth
              label="Email"
              name="email"
              type="email"
              validate={setUpValidation(
                validations.required,
                validations.email,
              )}
            />
            <Field
              component={FormInput}
              format={normalizeText}
              fullWidth
              label="Password"
              name="password"
              type="password"
              validate={setUpValidation(
                validations.required,
                validations.minLength8,
              )}
            />
            <Button
              className={classes.submitButton}
              disabled={!valid}
              size="medium"
              type="submit"
              variant="contained"
              onClick={handleSubmit}
            >
              Continue
            </Button>
          </form>
        )}
      />
    </div>
  );
};

export default SignUp;
