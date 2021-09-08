import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SignUp from '../../components/Profile/SignUp';
import LogIn from '../../components/Profile/SignIn';

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    flex: 1,
  },
}));

export const Profile: React.FC<{}> = (props) => {
  const classes = useStyles();
  const [form, setForm] = useState<string>('sign-in');

  const toggleForm = () => {
    if (form === 'sign-in') {
      setForm('sign-up');
    } else if (form === 'sign-up') {
      setForm('sign-in');
    }
  };

  return (
    <div className={classes.profileContainer}>
      {form === 'sign-in' ? (
        <LogIn toggleForm={toggleForm} />
      ) : (
        <SignUp toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default Profile;
