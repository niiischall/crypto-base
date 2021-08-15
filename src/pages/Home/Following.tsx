import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export interface Props {}

const useStyles = makeStyles((theme) => ({
  followingContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '355px',
    width: '100%',
  },
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

export const Following: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.followingContainer}>
      <>
        <img
          className={classes.image}
          src="/img/empty.svg"
          alt="no-following"
        />
        <span className={classes.subtext}>
          You are not following any cryptocurrencies yet.
        </span>
      </>
    </div>
  );
};

export default Following;
