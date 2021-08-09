import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import { HomeBackground } from '../../components/Icons';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    flex: 1,
  },
  homeHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  textBox: {
    flex: 1,
    textAlign: 'center',
  },
  heading: {
    color: '#669900',
    fontSize: 24,
    letterSpacing: 0.5,
  },
  text: {
    display: 'block',
    color: '#979797',
    fontSize: 12,
    letterSpacing: -0.5,
    fontWeight: 300,
  },
}));

const StyledButton = withStyles((theme) => ({
  root: {
    textTransform: 'capitalize',
    textDecoration: 'underline',
    fontSize: 12,
    color: '#f59842',
    '&:focus': {
      fontWeight: 700,
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  endIcon: {
    margin: 0,
  },
}))((props: any) => <Button disableRipple {...props} />);

export const Home: React.FC<{}> = (props) => {
  const classes = useStyles();

  const navigateToLearnMore = () => {
    chrome.tabs.create({ url: 'http://www.google.com', active: true });
  };

  return (
    <div className={classes.homeContainer}>
      <div className={classes.homeHeader}>
        <HomeBackground width={100} height={100} />
        <div className={classes.textBox}>
          <h1 className={classes.heading}>CryptoBase</h1>
          <span className={classes.text}>
            Personalize your crypto experience.
          </span>
          <StyledButton
            onClick={navigateToLearnMore}
            endIcon={<ArrowRightAltIcon />}
          >
            Learn More
          </StyledButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
