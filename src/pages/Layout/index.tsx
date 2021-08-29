import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Home from '../Home';
import Profile from '../Profile';
import Search from '../Search';

import { getFollowingCoinsDetails } from '../../store/actions/actionHome';

export interface Props {
  currentPage: string;
}

export const Layout: React.FC<Props> = (props) => {
  const { currentPage } = props;

  const dispatch = useDispatch();
  const followingCoins = useSelector((state: any) => state.home.followingCoins);

  useEffect(() => {
    if (followingCoins.length > 0) {
      dispatch(getFollowingCoinsDetails(followingCoins));
    }
  }, [dispatch, followingCoins]);

  return (
    <React.Fragment>
      {currentPage === 'home' && <Home />}
      {currentPage === 'search' && <Search />}
      {currentPage === 'profile' && <Profile />}
    </React.Fragment>
  );
};

export default Layout;
