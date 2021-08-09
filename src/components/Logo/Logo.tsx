import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Logo } from '../Icons';

export interface Props {}

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export const LogoComponent: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.logoContainer}>
      <Logo width={28} height={28} />
    </div>
  );
};

export default LogoComponent;
