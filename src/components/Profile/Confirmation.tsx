import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { Button, withStyles } from '@material-ui/core';

import { authLogout } from '../../store/actions/actionProfile';

export interface Props {
  switchPage: Function;
}

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  heading: {
    fontSize: '20px',
    color: '#669900',
  },
  statement: {
    fontSize: '16px',
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
}));

const StyledButton = withStyles((theme) => ({
  root: {
    height: 45,
    marginTop: 15,
    marginRight: 10,
    width: '40%',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '16px',
    textTransform: 'capitalize',
    backgroundColor: '#000',
    boxShadow: '0 0 0 1px rgb(0 0 0 / 5%), 0 5px 15px rgb(0 0 0 / 15%)',
    '&:hover': {
      color: '#000',
    },
  },
  endIcon: {
    margin: 0,
  },
}))((props: any) => <Button disableRipple {...props} />);

export const Confirmation: React.FC<Props> = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authLogout());
  };

  const handleNavigation = () => {
    props.switchPage('home');
  };

  return (
    <div className={classes.container}>
      <img
        className={classes.image}
        src="/img/high-five.svg "
        alt="high-five"
      />
      <h3 className={classes.heading}>You're in!</h3>
      <p className={classes.statement}>We're so glad you're here.</p>
      <div className={classes.buttonContainer}>
        <StyledButton onClick={handleNavigation}>Home</StyledButton>
        <StyledButton onClick={handleLogout}>Logout</StyledButton>
      </div>
    </div>
  );
};

export default Confirmation;
