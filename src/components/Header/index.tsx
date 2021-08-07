import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import './style.css';
import { Logo } from '../Icons';

export interface Props {}

export const Header: React.FC<Props> = (props) => {
  const useStyles = makeStyles((theme) => ({
    iconButton: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  }));
  const classes = useStyles();

  return (
    <header className="header">
      <Logo width={28} height={28} />
      <IconButton
        onClick={() => window.close()}
        className={classes.iconButton}
        disableRipple
      >
        <CloseIcon color="inherit" fontSize="large" />
      </IconButton>
    </header>
  );
};

export default Header;
