import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import LogoComponent from '../Logo';
import SearchInput from '../SearchInput';
import User from '../User';

export interface Props {
  currentPage: string;
}

const useStyles = makeStyles((theme) => ({
  header: {
    borderBottom: '1px solid #eeeeee',
    boxShadow: '0px 2px 6px 0px rgb(0 0 0 / 5%)',
    color: '#979797',
    width: '100%',
    padding: '0.5rem 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconButton: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

export const Header: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { currentPage } = props;

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
    <header className={classes.header}>
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
