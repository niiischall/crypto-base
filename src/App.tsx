import React from 'react';
import './App.css';

import Header from './components/Header';

export interface Props {}

export const App: React.FC<Props> = () => {
  return (
    <div className="app-container">
      <Header />
      <span>&nbsp;</span>
    </div>
  );
};

export default App;
