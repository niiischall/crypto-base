import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import SignUp from '../../components/Profile/SignUp';
import LogIn from '../../components/Profile/SignIn';
import Confirmation from '../../components/Profile/Confirmation';
import { auth } from '../../store/actions/actionProfile';

export interface Props {
  switchPage: Function;
}

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    flex: 1,
  },
}));

export const Profile: React.FC<Props> = ({ switchPage }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.profile.userId);

  const [form, setForm] = useState<string>('sign-in');

  const toggleForm = () => {
    if (form === 'sign-in') {
      setForm('sign-up');
    } else if (form === 'sign-up') {
      setForm('sign-in');
    }
  };

  const submitForm = (email: string, password: string, isSignUp: boolean) => {
    dispatch(auth(email, password, isSignUp));
  };

  return (
    <div className={classes.profileContainer}>
      {!userId ? (
        form === 'sign-in' ? (
          <LogIn toggleForm={toggleForm} submitForm={submitForm} />
        ) : (
          <SignUp toggleForm={toggleForm} submitForm={submitForm} />
        )
      ) : (
        <Confirmation switchPage={switchPage} />
      )}
    </div>
  );
};

export default Profile;
