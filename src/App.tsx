import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import Layout from './pages/Layout';
import Navigation from './components/Navigation';

import { pages, PageProvider } from './services/context';
import { checkAuthState } from './store/actions/actionProfile';

export interface Props {}

const useStyles = makeStyles((theme) => ({
  appContainer: {
    width: 360,
    height: 600,
    backgroundColor: '#F8F8F8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

export const App: React.FC<Props> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [page, setPage] = useState<string>(pages.home);
  const handlePageChange = (event: any, newValue: string) => setPage(newValue);

  //Check for Auth State
  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch]);

  return (
    <div className={classes.appContainer}>
      <PageProvider
        value={{
          page,
          switchPage: handlePageChange,
        }}
      >
        <Header />
        <Layout />
        <Navigation />
      </PageProvider>
    </div>
  );
};

export default App;
