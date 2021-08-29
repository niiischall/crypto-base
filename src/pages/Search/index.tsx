import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { getTrendingCoinsDetails } from '../../store/actions/actionSearch';
import { normalizePrice } from '../../services/helpers';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: '#f3f3f3',
    overflowY: 'auto',
    paddingBottom: 15,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
  },
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

const StyledButton = withStyles((theme) => ({
  root: {
    color: '#fff',
    backgroundColor: '#669900',
    width: 100,
    borderRadius: 15,
    '&:hover': {
      color: '#fff',
      backgroundColor: '#ccc',
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

export const Search: React.FC<{}> = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const trendingCoins = useSelector((state: any) => state.search.trendingCoins);
  const coinsDetails = useSelector((state: any) => state.search.coinsDetails);

  useEffect(() => {
    if (trendingCoins.length > 0 && !coinsDetails) {
      dispatch(getTrendingCoinsDetails(trendingCoins));
    }
  }, [dispatch, trendingCoins, coinsDetails]);

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
    <div className={classes.searchContainer}>
      {trendingCoins.length > 0 &&
        coinsDetails &&
        Object.keys(trendingCoins).length > 0 && (
          <>
            <div className={classes.searchHeader}>
              <span className={classes.searchHeading}>Trending Now</span>
            </div>
            {trendingCoins.map((coin: any) => {
              const logo = coinsDetails[coin.id].logo;
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
                  <StyledButton
                    disableRipple
                    className={classes.button}
                    endIcon={<Favorite />}
                  >
                    Follow
                  </StyledButton>
                </div>
              );
            })}
          </>
        )}
    </div>
  );
};

export default Search;
