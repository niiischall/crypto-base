import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Follow from '../../components/Following/Follow';
import Unfollow from '../../components/Following/Unfollow';

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
}));

export const Following: React.FC<Props> = (props) => {
  const classes = useStyles();
  const followingCoins = useSelector((state: any) => state.home.followingCoins);

  return (
    <div className={classes.followingContainer}>
      {followingCoins.length > 0 ? <Follow /> : <Unfollow />}
    </div>
  );
};

export default Following;
