import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import pageContext, { pages } from '../../services/context';

const useStyles = makeStyles((theme) => ({
  image: {
    width: 200,
    height: 200,
  },
  subtext: {
    color: '#669900',
    fontSize: 14,
    fontWeight: 300,
  },
  authButton: {
    height: 35,
    marginTop: 15,
    width: 200,
    borderRadius: '6px',
    color: '#fff',
    fontSize: '16px',
    textTransform: 'capitalize',
    backgroundColor: '#11a683',
  },
}));

export const Unfollow: React.FC<{}> = () => {
  const classes = useStyles();
  const userId = useSelector((state: any) => state.profile.userId);

  const { switchPage } = useContext(pageContext);

  return (
    <React.Fragment>
      {userId ? (
        <>
          <img
            className={classes.image}
            src="/img/empty.svg"
            alt="no-following"
          />
          <span className={classes.subtext}>
            You are not following any cryptocurrencies yet.
          </span>
        </>
      ) : (
        <>
          <img
            className={classes.image}
            src="/img/no-auth.svg"
            alt="not-authenticated"
          />
          <span className={classes.subtext}>You're not signed in yet.</span>
          <Button
            className={classes.authButton}
            size="medium"
            type="submit"
            variant="contained"
            onClick={(event: any) => switchPage(event, pages.profile)}
          >
            Continue
          </Button>
        </>
      )}
    </React.Fragment>
  );
};

export default Unfollow;
