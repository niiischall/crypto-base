import React from 'react';
import './style.css';

export interface Props {}

export const User: React.FC<Props> = (props) => {
  return (
    <div className="user-container">
      <img className="user-avatar" src="/img/thumbnail.jpg" alt="user-avatar" />
      <span className="user-name">Nischal Nikit</span>
    </div>
  );
};

export default User;
