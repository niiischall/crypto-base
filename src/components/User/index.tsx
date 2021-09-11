import React from 'react';
import { AccountCircle, PersonAdd } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

export interface Props {}

const useStyles = makeStyles((theme) => ({
  userContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  userName: {
    fontSize: 14,
    fontWeight: 400,
    color: ' #323232',
  },
}));

export const User: React.FC<Props> = (props) => {
  const classes = useStyles();
  const userEmail = useSelector((state: any) => state.profile.userEmail);

  return (
    <div className={classes.userContainer}>
      {userEmail ? (
        <>
          <AccountCircle
            style={{
              color: '#ccc',
              fontSize: 32,
              marginRight: 7.5,
            }}
          />
          <span className={classes.userName}>{userEmail}</span>
        </>
      ) : (
        <PersonAdd
          style={{
            color: '#979797',
            fontSize: 30,
            marginLeft: 10,
          }}
        />
      )}
    </div>
  );
};

export default User;
