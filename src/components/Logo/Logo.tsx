import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Logo } from '../Icons';

export interface Props {}

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  brandName: {
    marginLeft: '7.5px',
    fontSize: '18px',
    fontWeight: 300,
    letterSpacing: 0.5,
    color: '#669900',
  },
}));

export const LogoComponent: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.logoContainer}>
      <Logo width={28} height={28} />
      <span className={classes.brandName}>CryptoBase</span>
    </div>
  );
};

export default LogoComponent;
