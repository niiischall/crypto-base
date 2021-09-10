import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { Favorite, Check, WhatshotSharp } from '@material-ui/icons';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { followCoin, unfollowCoin } from '../../store/actions/actionHome';
import { normalizePrice, isCoinPresent } from '../../services/helpers';

export interface Props {}

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: 'auto',
  },
  searchHeader: {
    height: '10%',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  searchHeading: {
    color: '#979797',
    display: 'flex',
    fontSize: 15,
    fontWeight: 700,
  },
  icon: {
    marginLeft: 5,
    fontSize: 15,
  },
  trendingCoin: {
    backgroundColor: '#f8f8f8',
    width: '47.5%',
    height: 200,
    marginBottom: 15,
    padding: 10,
    boxShadow: '0px 2px 9px 0px rgb(0 0 0 / 2%)',
    borderRadius: '3px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    transition: 'all .2s linear',
    '&:hover': {
      backgroundColor: '#fff',
      boxShadow: '0 0 0 1px rgb(0 0 0 / 5%), 0 5px 15px rgb(0 0 0 / 15%)',
    },
  },
  coin: {
    width: 50,
    height: 50,
    border: '2px solid #979797',
    borderRadius: '50%',
  },
  textBox: {
    margin: '5px 0px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  symbol: {
    fontSize: 8,
    fontWeight: 700,
    color: '#669900',
  },
  priceChange: {
    fontSize: 10,
    marginLeft: 3,
  },
  change: {
    marginRight: 2,
    fontWeight: 500,
  },
  price: {
    color: '#979797',
    display: 'block',
    marginTop: 5,
    fontSize: 10,
    fontWeight: 500,
  },
  name: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 5,
  },
}));

const StyledFollowButton = withStyles((theme) => ({
  root: {
    color: '#fff',
    backgroundColor: '#000',
    width: 100,
    borderRadius: 15,
    transition: 'all .2s',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#000',
    },
  },
  label: {
    fontSize: 12,
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  endIcon: {
    marginLeft: 2,
  },
}))(Button);

const StyledUnfollowButton = withStyles((theme) => ({
  root: {
    color: '#fff',
    backgroundColor: '#669900',
    width: 100,
    borderRadius: 15,
    transition: 'all .2s',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#669900',
    },
  },
  label: {
    fontSize: 12,
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  endIcon: {
    marginLeft: 2,
  },
}))(Button);

export const Trending: React.FC<Props> = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const trendingCoins = useSelector((state: any) => state.search.trendingCoins);
  const trendingCoinsDetails = useSelector(
    (state: any) => state.search.trendingCoinsDetails,
  );
  const followingCoins = useSelector((state: any) => state.home.followingCoins);

  const renderPriceChange = (change: any) => {
    const isPositive = change > 0;
    const absoluteChange = Math.abs(change);
    return (
      <span
        className={classes.priceChange}
        style={{ color: isPositive ? '#006600' : '#cc3300' }}
      >
        {isPositive ? (
          <span className={classes.change}>&uarr;{absoluteChange}%</span>
        ) : (
          <span className={classes.change}>&darr;{absoluteChange}%</span>
        )}
      </span>
    );
  };

  const coinHandler = (coin: any) => {
    const isCoinFollowed = isCoinPresent(coin, followingCoins);
    if (isCoinFollowed) dispatch(unfollowCoin(coin));
    else dispatch(followCoin(coin));
  };

  return (
    <React.Fragment>
      {trendingCoins.length > 0 &&
        trendingCoinsDetails &&
        Object.keys(trendingCoins).length > 0 && (
          <>
            <div className={classes.searchHeader}>
              <span className={classes.searchHeading}>
                Spotlight <WhatshotSharp className={classes.icon} />
              </span>
            </div>
            {trendingCoins.map((coin: any) => {
              const logo = trendingCoinsDetails[coin.id].logo;
              return (
                <div key={coin.id} className={classes.trendingCoin}>
                  <img
                    className={classes.coin}
                    src={logo}
                    alt={`${coin.slug}-logo`}
                  />
                  <div className={classes.textBox}>
                    <span className={classes.name}>{coin.name}</span>
                    <span className={classes.symbol}>{coin.symbol}</span>
                    <span className={classes.price}>
                      ${normalizePrice(coin.quote.USD.price)} |
                      {renderPriceChange(
                        coin.quote.USD.percent_change_24h.toFixed(2),
                      )}
                    </span>
                  </div>
                  {isCoinPresent(coin, followingCoins) ? (
                    <StyledUnfollowButton
                      disableRipple
                      className={classes.button}
                      onClick={() => coinHandler(coin)}
                      endIcon={<Check />}
                    >
                      Following
                    </StyledUnfollowButton>
                  ) : (
                    <StyledFollowButton
                      disableRipple
                      className={classes.button}
                      onClick={() => coinHandler(coin)}
                      endIcon={<Favorite />}
                    >
                      Follow
                    </StyledFollowButton>
                  )}
                </div>
              );
            })}
          </>
        )}
    </React.Fragment>
  );
};

export default Trending;
