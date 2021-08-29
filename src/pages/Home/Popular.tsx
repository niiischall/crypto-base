import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { followCoin, unfollowCoin } from '../../store/actions/actionHome';
import { normalizePrice, isCoinPresent } from '../../services/helpers';

export interface Props {}

const useStyles = makeStyles((theme) => ({
  listingsContainer: {
    height: '355px',
    overflowY: 'auto',
  },
  listing: {
    borderRadius: '5px',
    backgroundColor: '#eeeeee',
    display: 'flex',
    alignItems: 'center',
    width: '85%',
    height: 75,
    margin: '0px auto',
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    transition: 'all .2s linear',
    '&:hover': {
      backgroundColor: '#f8f8f8',
      boxShadow: '0 0 0 1px rgb(0 0 0 / 5%), 0 5px 15px rgb(0 0 0 / 15%)',
    },
  },
  textBox: {
    marginLeft: 10,
  },
  icon: {
    color: '#979797',
    fontSize: 16,
  },
  iconButton: {
    marginLeft: 'auto',
  },
  image: {
    width: 30,
    height: 30,
  },
  name: {
    fontSize: 14,
    fontWeight: 600,
    marginRight: 5,
  },
  symbol: {
    fontSize: 8,
    fontWeight: 700,
    color: '#669900',
  },
  price: {
    color: '#979797',
    display: 'block',
    marginTop: 5,
    fontSize: 10,
    fontWeight: 500,
  },
  priceChange: {
    fontSize: 10,
    marginLeft: 3,
  },
  change: {
    marginRight: 2,
    fontWeight: 500,
  },
}));

export const Popular: React.FC<Props> = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const coins = useSelector((state: any) => state.home.popularCoins);
  const followingCoins = useSelector((state: any) => state.home.followingCoins);
  const coinsDetails = useSelector(
    (state: any) => state.home.popularCoinsDetails,
  );

  const coinHandler = (coin: any) => {
    const isCoinFollowed = isCoinPresent(coin, followingCoins);
    if (isCoinFollowed) dispatch(unfollowCoin(coin));
    else dispatch(followCoin(coin));
  };

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

  return (
    <div className={classes.listingsContainer}>
      {coins.length > 0 &&
        coinsDetails &&
        Object.keys(coinsDetails).length > 0 &&
        coins.map((listing: any) => {
          const logo = coinsDetails[listing.id].logo;
          return (
            <div className={classes.listing} key={listing.id}>
              <img
                src={logo}
                alt={`${listing.slug}-logo`}
                className={classes.image}
              />
              <div className={classes.textBox}>
                <span className={classes.name}>{listing.name}</span>
                <span className={classes.symbol}>{listing.symbol}</span>
                <span className={classes.price}>
                  ${normalizePrice(listing.quote.USD.price)} |
                  {renderPriceChange(
                    listing.quote.USD.percent_change_24h.toFixed(2),
                  )}
                </span>
              </div>
              <IconButton
                className={classes.iconButton}
                onClick={() => coinHandler(listing)}
                disableRipple
              >
                <FavoriteIcon
                  style={
                    isCoinPresent(listing, followingCoins)
                      ? { color: '#669900' }
                      : { color: '#979797' }
                  }
                  className={classes.icon}
                />
              </IconButton>
            </div>
          );
        })}
    </div>
  );
};

export default Popular;
