import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { HomeBackground } from '../../components/Icons';
import Popular from './Popular';
import Following from './Following';
import { getPopularCoinsDetails } from '../../store/actions/actionHome';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  homeHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  homeNavigation: {
    display: 'flex',
    flexDirection: 'column',
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
  icon: {
    marginBottom: '0px !important',
    marginRight: 5,
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

const StyledTabs = withStyles({
  root: {
    width: '100%',
    minHeight: 30,
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      width: '100%',
      height: 5,
      backgroundColor: ' #669900',
    },
  },
})((props: any) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />
));

const StyledTab = withStyles((theme) => ({
  root: {
    width: '50%',
    minHeight: 30,
    textTransform: 'none',
    color: '#323232',
    fontSize: 14,
    fontWeight: 300,
    '&:focus': {
      fontWeight: 400,
    },
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}))((props: any) => <Tab disableRipple {...props} />);

export const Home: React.FC<{}> = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const popularCoins = useSelector((state: any) => state.home.popularCoins);
  const popularCoinsDetails = useSelector(
    (state: any) => state.home.popularCoinsDetails,
  );

  const [currentTab, setCurrentTab] = useState<number>(0);

  useEffect(() => {
    if (popularCoins.length > 0 && !popularCoinsDetails) {
      dispatch(getPopularCoinsDetails(popularCoins));
    }
  }, [dispatch, popularCoins, popularCoinsDetails]);

  const navigateToLearnMore = () => {
    chrome.tabs.create({
      url: 'https://crypto-base-landing-page.vercel.app',
      active: true,
    });
  };

  const handleChange = (event: any, newValue: number) => {
    setCurrentTab(newValue);
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
      <div className={classes.homeNavigation}>
        <StyledTabs
          value={currentTab}
          onChange={handleChange}
          aria-label="icon label tabs example"
        >
          <StyledTab
            icon={<StarIcon className={classes.icon} />}
            label="Popular"
          />
          <StyledTab
            icon={<FavoriteIcon className={classes.icon} />}
            label="Following"
          />
        </StyledTabs>
      </div>
      {currentTab === 0 && <Popular switchTab={handleChange} />}
      {currentTab === 1 && <Following />}
    </div>
  );
};

export default Home;
