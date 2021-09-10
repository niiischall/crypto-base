import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FormInput from '../FormInput';
import { normalizeText } from '../../services/helpers';
import { validations, setUpValidation } from '../../services/validation';
import { clearAuthError } from '../../store/actions/actionProfile';

export interface Props {
  toggleForm: Function;
  submitForm: Function;
}

const useStyles = makeStyles((theme) => ({
  signInContainer: {
    height: '100%',
    flex: 1,
    padding: 30,
    backgroundColor: '#f3f3f3',
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
    backgroundColor: '#f3f3f3',
    border: 'none',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  form: {
    marginTop: 50,
  },
  errorContainer: {
    color: '#ce1331',
    backgroundColor: '#ffdbe3',
    minHeight: 50,
    margin: '5px 0px',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    transition: 'all 1s',
  },
  error: {
    fontSize: 12,
    textTransform: 'capitalize',
  },
  submitButton: {
    height: 55,
    marginTop: 15,
    width: '100%',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '16px',
    textTransform: 'capitalize',
    backgroundColor: '#11a683',
  },
}));

export const SignIn: React.FC<Props> = ({ toggleForm, submitForm }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const errorInSigningIn = useSelector((state: any) => state.profile.error);

  const handleSubmit = (values: any) => {
    const { email, password } = values;
    submitForm(email, password, false);
  };

  const handleFormToggle = () => {
    toggleForm();
    dispatch(clearAuthError());
  };

  return (
    <div className={classes.signInContainer}>
      <div className={classes.header}>
        <span className={classes.heading}>Sign in</span>
        <button className={classes.headerButton} onClick={handleFormToggle}>
          I don't have an account
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
            {errorInSigningIn && (
              <div className={classes.errorContainer}>
                <span className={classes.error}>
                  It seems like there's an issue of "{errorInSigningIn}".
                </span>
              </div>
            )}
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

export default SignIn;
