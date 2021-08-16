import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { getTrendingCoinsDetails } from '../../store/actions/actionSearch';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: '#eeeeee',
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
    backgroundColor: 'white',
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
  },
  name: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 5,
  },
}));

export const Search: React.FC<{}> = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const trendingCoins = useSelector((state: any) => state.search.trendingCoins);
  const coinsDetails = useSelector((state: any) => state.search.coinsDetails);

  useEffect(() => {
    if (trendingCoins.length > 0 && !coinsDetails) {
      dispatch(getTrendingCoinsDetails(trendingCoins));
    }
  }, []);

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
                  </div>
                </div>
              );
            })}
          </>
        )}
    </div>
  );
};

export default Search;
