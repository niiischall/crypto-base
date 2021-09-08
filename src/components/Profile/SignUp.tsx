import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
}));

export const SignUp: React.FC<Props> = ({ toggleForm }) => {
  const classes = useStyles();

  return (
    <div className={classes.signUpContainer}>
      <div className={classes.header}>
        <span className={classes.heading}>Sign up</span>
        <button className={classes.headerButton} onClick={() => toggleForm()}>
          I don't have an account
        </button>
      </div>
    </div>
  );
};

export default SignUp;
