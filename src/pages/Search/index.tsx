import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Trending from '../../components/Trending';
import SearchResult from '../../components/Search';
import {
  getTotalCoins,
  getTrendingCoinsDetails,
} from '../../store/actions/actionSearch';

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
}));

export const Search: React.FC<{}> = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const searchTerm = useSelector((state: any) => state.search.searchedCoinTerm);
  const searchedCoin = useSelector((state: any) => state.search.searchedCoin);
  const totalCoins = useSelector((state: any) => state.search.totalCoins);
  const trendingCoins = useSelector((state: any) => state.search.trendingCoins);
  const trendingCoinsDetails = useSelector(
    (state: any) => state.search.trendingCoinsDetails,
  );

  useEffect(() => {
    if (totalCoins.length === 0) {
      dispatch(getTotalCoins());
    }
  }, [dispatch, totalCoins]);

  useEffect(() => {
    if (trendingCoins.length > 0 && !trendingCoinsDetails) {
      dispatch(getTrendingCoinsDetails(trendingCoins));
    }
  }, [dispatch, trendingCoins, trendingCoinsDetails]);

  return (
    <div className={classes.searchContainer}>
      {searchTerm && searchedCoin ? <SearchResult /> : <Trending />}
    </div>
  );
};

export default Search;
