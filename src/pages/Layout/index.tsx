import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Home from '../Home';
import Profile from '../Profile';
import Search from '../Search';

import { API_RECALL_TIMER } from '../../services/helpers';
import {
  getPopularCoins,
  getFollowingCoinsDetails,
} from '../../store/actions/actionHome';
import { getTrendingCoins } from '../../store/actions/actionSearch';

export interface Props {
  currentPage: string;
  switchPage: Function;
}

export const Layout: React.FC<Props> = (props) => {
  const { currentPage } = props;
  const dispatch = useDispatch();
  const followingCoins = useSelector((state: any) => state.home.followingCoins);

  const gatherInitialData = useCallback(() => {
    dispatch(getPopularCoins());
    dispatch(getTrendingCoins());
  }, [dispatch]);

  const gatherFollowingCoinData = useCallback(
    (followingCoins) => {
      dispatch(getFollowingCoinsDetails(followingCoins));
    },
    [dispatch],
  );

  useEffect(() => {
    gatherInitialData();
    const interval = setInterval(() => gatherInitialData(), API_RECALL_TIMER);
    return () => clearInterval(interval);
  }, [dispatch, gatherInitialData]);

  useEffect(() => {
    if (followingCoins.length > 0) {
      gatherFollowingCoinData(followingCoins);
      const interval = setInterval(
        () => gatherFollowingCoinData(followingCoins),
        API_RECALL_TIMER,
      );
      return () => clearInterval(interval);
    }
  }, [dispatch, followingCoins, gatherFollowingCoinData]);

  return (
    <React.Fragment>
      {currentPage === 'home' && <Home />}
      {currentPage === 'search' && <Search />}
      {currentPage === 'profile' && <Profile switchPage={props.switchPage} />}
    </React.Fragment>
  );
};

export default Layout;
