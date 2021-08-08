import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import './style.css';
import LogoComponent from '../Logo/Logo';
import SearchInput from '../SearchInput';
import User from '../User';

export interface Props {
  currentPage: string;
}

export const Header: React.FC<Props> = (props) => {
  const { currentPage } = props;

  const useStyles = makeStyles((theme) => ({
    iconButton: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  }));
  const classes = useStyles();

  const renderHeaderComponent = () => {
    let headerComponent = null;
    if (currentPage === 'home') {
      headerComponent = <LogoComponent />;
    } else if (currentPage === 'search') {
      headerComponent = <SearchInput />;
    } else if (currentPage === 'profile') {
      headerComponent = <User />;
    }
    return headerComponent;
  };

  return (
    <header className="header">
      {renderHeaderComponent()}
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
