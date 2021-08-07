import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Layout from './pages/Layout';
import Navigation from './components/Navigation';

export interface Props {}

export const App: React.FC<Props> = () => {
  const [value, setValue] = useState<string>('home');

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="app-container">
      <Header />
      <Layout currentPage={value} />
      <Navigation currentPage={value} switchPage={handleChange} />
    </div>
  );
};

export default App;
