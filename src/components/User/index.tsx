import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export interface Props {}

const useStyles = makeStyles((theme) => ({
  userContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  userAvatar: {
    borderRadius: '50%',
    border: '1px solid #979797',
    width: 32,
    height: 32,
    marginRight: 7.5,
  },
  userName: {
    fontSize: 14,
    fontWeight: 600,
    color: ' #323232',
  },
}));

export const User: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.userContainer}>
      <img
        className={classes.userAvatar}
        src="/img/thumbnail.jpg"
        alt="user-avatar"
      />
      <span className={classes.userName}>Nischal Nikit</span>
    </div>
  );
};

export default User;
