import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import Layout from './pages/Layout';
import Navigation from './components/Navigation';

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

  //State and handler to switch between tabs.
  const [value, setValue] = useState<string>('home');
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  //Check for Auth State
  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch]);

  return (
    <div className={classes.appContainer}>
      <Header currentPage={value} />
      <Layout currentPage={value} switchPage={handleChange} />
      <Navigation currentPage={value} switchPage={handleChange} />
    </div>
  );
};

export default App;
