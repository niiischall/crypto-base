import React from 'react';

import Home from '../Home';
import Profile from '../Profile';
import Search from '../Search';

export interface Props {
  currentPage: string;
}

export const Layout: React.FC<Props> = (props) => {
  const { currentPage } = props;

  return (
    <React.Fragment>
      {currentPage === 'home' && <Home />}
      {currentPage === 'search' && <Search />}
      {currentPage === 'profile' && <Profile />}
    </React.Fragment>
  );
};

export default Layout;
