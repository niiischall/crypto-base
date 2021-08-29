import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export interface Props {}

const useStyles = makeStyles((theme) => ({
  image: {
    width: 200,
    height: 200,
  },
  subtext: {
    color: '#669900',
    fontSize: 14,
    fontWeight: 300,
  },
}));

export const Unfollow: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <img className={classes.image} src="/img/empty.svg" alt="no-following" />
      <span className={classes.subtext}>
        You are not following any cryptocurrencies yet.
      </span>
    </React.Fragment>
  );
};

export default Unfollow;
