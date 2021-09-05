import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, TextField, InputAdornment } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Search } from '@material-ui/icons';
import { debounce } from 'lodash';

import SearchResults from './SearchResults';
import { searchCoinTerm, searchCoin } from '../../store/actions/actionSearch';

export interface Props {}

const useStyles = makeStyles((theme) => ({
  form: {
    margin: theme.spacing(1),
  },
}));

export const SearchInput: React.FC<Props> = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const search = useSelector((state: any) => state.search.searchedCoinTerm);
  const totalCoins = useSelector((state: any) => state.search.totalCoins);

  const [searchedResult, setSearchedResult] = useState<any[]>([]);
  const [suggestions, showSuggestions] = useState<boolean>(false);

  //Debouncing logic for searching through the coins.
  const searching = () => {
    if (totalCoins.length > 0) {
      const filteredSearches = totalCoins.filter((coin: any) => {
        if (coin.slug.toLowerCase().includes(search.toLowerCase())) {
          return coin;
        }
      });
      setSearchedResult(filteredSearches);
    }
  };
  const delayedSearch = useCallback(debounce(searching, 300), [search]);
  const searchHandler = (term: string) => {
    dispatch(searchCoinTerm(term));
  };
  useEffect(() => {
    delayedSearch();
    return delayedSearch.cancel;
  }, [search, delayedSearch]);

  //Handlers for interacting with the search
  const onInputBlur = () => {
    setTimeout(() => showSuggestions(false), 250);
  };
  const onInputFocus = () => {
    showSuggestions(true);
  };

  //Handler for searching a coin
  const handleCoinSearch = (coinName: string, coinSlug: string) => {
    dispatch(searchCoinTerm(coinName));
    dispatch(searchCoin(coinSlug));
  };

  //Properties for Mui-TextField
  const InputProps = {
    startAdornment: (
      <InputAdornment position="start">
        <Search fontSize="large" />
      </InputAdornment>
    ),
    disableUnderline: true,
    style: { fontSize: 14, color: '#323232' },
    onBlur: onInputBlur,
    onFocus: onInputFocus,
    value: search,
  };

  return (
    <FormControl className={classes.form}>
      <TextField
        id="coin-search-input"
        placeholder="Search coins"
        InputProps={InputProps}
        onChange={(event) => searchHandler(event.target.value)}
      />
      {suggestions && searchedResult && searchedResult.length > 0 && (
        <SearchResults results={searchedResult} search={handleCoinSearch} />
      )}
    </FormControl>
  );
};

export default SearchInput;
