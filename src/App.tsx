import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import db from './services/firebase';
import { onSnapshot, collection } from '@firebase/firestore';

import Header from './components/Header';
import Layout from './pages/Layout';
import Navigation from './components/Navigation';

import { pages, PageProvider } from './services/context';
import { checkAuthState } from './store/actions/actionProfile';
import {
  getFollowingCoins,
  getNotifiedCoins,
} from './store/actions/actionHome';

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
  const userId = useSelector((state: any) => state.profile.userId);

  const [page, setPage] = useState<string>(pages.home);
  const handlePageChange = (event: any, newValue: string) => setPage(newValue);

  //Check for Auth State.
  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch]);

  //Check for realtime database updates for following/notification coins.
  useEffect(() => {
    if (userId) {
      onSnapshot(collection(db, 'users'), (snapshot: any) => {
        const db = snapshot.docs.map((doc: any) => doc.data());
        const data = db.find((data: any) => data.userId === userId);
        if (data.following) {
          dispatch(getFollowingCoins(data.following));
        }
        if (data.notification) {
          dispatch(getNotifiedCoins(data.notification));
        }
      });
    }
  }, [dispatch, userId]);

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
