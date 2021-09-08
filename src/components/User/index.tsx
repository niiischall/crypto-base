import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import { useSelector } from 'react-redux';
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
  const userId = useSelector((state: any) => state.profile.userId);

  return (
    <div className={classes.userContainer}>
      {userId ? (
        <span className={classes.userName}>User</span>
      ) : (
        <AccountCircle
          style={{
            color: '#ccc',
            fontSize: 32,
            marginRight: 7.5,
          }}
        />
      )}
    </div>
  );
};

export default User;
