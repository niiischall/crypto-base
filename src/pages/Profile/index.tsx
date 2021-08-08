import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    flex: 1,
  },
}));

export const Profile: React.FC<{}> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.profileContainer}>
      <span>&nbsp;</span>
    </div>
  );
};

export default Profile;
