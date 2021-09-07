import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

export interface Props {}

const useStyles = makeStyles((theme) => ({
  userContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: 600,
    color: ' #323232',
  },
}));

export const User: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.userContainer}>
      <AccountCircle
        style={{
          color: '#ccc',
          fontSize: 32,
          marginRight: 7.5,
        }}
      />
      <span className={classes.userName}>Nischal Nikit</span>
    </div>
  );
};

export default User;
