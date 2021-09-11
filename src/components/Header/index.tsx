import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import LogoComponent from '../Logo';
import SearchInput from '../SearchInput';
import User from '../User';
import pageContext from '../../services/context';

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
  button: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  iconButton: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

export const Header: React.FC<{}> = (props) => {
  const classes = useStyles();

  const { page } = useContext(pageContext);

  const renderHeaderComponent = () => {
    let headerComponent = null;
    if (page === 'home') headerComponent = <LogoComponent />;
    else if (page === 'search') headerComponent = <SearchInput />;
    else if (page === 'profile') headerComponent = <User />;

    return headerComponent;
  };

  return (
    <header className={classes.header}>
      {renderHeaderComponent()}
      <div className={classes.button}>
        <IconButton
          onClick={() => window.close()}
          className={classes.iconButton}
          disableRipple
        >
          <CloseIcon color="inherit" fontSize="large" />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
