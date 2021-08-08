import React from 'react';

import './style.css';
import { Logo } from '../Icons';

export interface Props {}

export const LogoComponent: React.FC<Props> = (props) => {
  return (
    <div className="logo-container">
      <Logo width={28} height={28} />
      <span className="brand-name">CryptoBase</span>
    </div>
  );
};

export default LogoComponent;
