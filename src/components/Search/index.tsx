import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ArrowRightAlt } from '@material-ui/icons';

export interface Props {}

const useStyles = makeStyles((theme) => ({
  searchResultContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
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
  imageBox: {
    flex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchBox: {
    height: 200,
    borderRadius: '5px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 0 0 1px rgb(0 0 0 / 5%), 0 5px 15px rgb(0 0 0 / 15%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: '0px auto',
    padding: 15,
  },
  image: {
    width: 50,
    height: 50,
  },
  coin: {
    width: '75%',
    height: '100%',
  },
  name: {
    fontSize: 18,
    color: '#669900',
  },
  year: {
    display: 'block',
    margin: '5px 0px',
    fontSize: 10,
    color: '#f59842',
  },
  symbol: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 5,
  },
  description: {
    display: 'block',
    width: '100%',
    fontSize: 12,
    color: '#000',
    lineHeight: '14.5px',
    margin: '5px 0px',
  },
}));

const StyledButton = withStyles((theme) => ({
  root: {
    textTransform: 'capitalize',
    textDecoration: 'underline',
    fontSize: 12,
    color: '#669900',
    padding: 0,
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
}))((props: any) => <Button {...props} />);

export const Search: React.FC<Props> = (props) => {
  const classes = useStyles();
  const searchedCoin = useSelector((state: any) => state.search.searchedCoin);

  const [coinDetails, setCoinDetails] = useState<any>({
    name: '',
    logo: '',
    symbol: '',
    urls: '',
    month: '',
    day: '',
    year: '',
    desc: '',
  });

  useEffect(() => {
    if (searchedCoin) {
      const coin: any = Object.values(searchedCoin)[0];
      const { name, logo, symbol, urls, date_added, description } = coin;
      const date = new Date(date_added);
      const [month, day, year] = [
        date.getMonth(),
        date.getDate(),
        date.getFullYear(),
      ];
      const desc = description.substr(0, 200);
      setCoinDetails({
        name,
        logo,
        symbol,
        urls,
        month,
        day,
        year,
        desc,
      });
    }
  }, [searchedCoin]);

  const navigateToKnowMore = (url: string) => {
    chrome.tabs.create({ url, active: false });
  };

  return (
    <div className={classes.searchResultContainer}>
      <div className={classes.searchHeader}>
        <span className={classes.searchHeading}>Search result</span>
      </div>
      <article className={classes.searchBox}>
        <div className={classes.imageBox}>
          <img
            src={coinDetails.logo}
            alt="coin-preview"
            className={classes.image}
          />
        </div>
        <div className={classes.coin}>
          <h3 className={classes.name}>
            {coinDetails.name}
            <span className={classes.symbol}>({coinDetails.symbol})</span>
          </h3>
          <span className={classes.year}>
            In circulation since{' '}
            <span style={{ fontWeight: 'bold' }}>
              {coinDetails.day}/{coinDetails.month}/{coinDetails.year}
            </span>
            .
          </span>
          <p className={classes.description}>{coinDetails.desc}...</p>
          <StyledButton
            onClick={() => navigateToKnowMore(coinDetails.urls.website[0])}
            endIcon={<ArrowRightAlt />}
          >
            Know More
          </StyledButton>
        </div>
      </article>
    </div>
  );
};

export default Search;
