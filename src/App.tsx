import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import Header from './components/Header';
import Layout from './pages/Layout';
import Navigation from './components/Navigation';

import { getPopularCoins } from './store/actions/actionHome';
import { getTrendingCoins } from './store/actions/actionSearch';

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

  const [value, setValue] = useState<string>('home');

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    //TODO: Merge all these actions into one.
    dispatch(getPopularCoins());
    dispatch(getTrendingCoins());
  }, [dispatch]);

  return (
    <div className={classes.appContainer}>
      <Header currentPage={value} />
      <Layout currentPage={value} />
      <Navigation currentPage={value} switchPage={handleChange} />
    </div>
  );
};

export default App;
