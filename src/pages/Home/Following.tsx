import React from 'react';
import { useSelector } from 'react-redux';
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

const _noFollowingsRender = () => {
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

const _followingRender = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <span>Coins following!</span>
    </React.Fragment>
  );
};

export const Following: React.FC<Props> = (props) => {
  const classes = useStyles();
  const followingCoins = useSelector((state: any) => state.home.followingCoins);

  return (
    <div className={classes.followingContainer}>
      {followingCoins.length === 0 ? _followingRender() : _noFollowingsRender()}
    </div>
  );
};

export default Following;
