import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
    boxShadow: '0px 2px 9px 0px rgb(0 0 0 / 2%)',
    borderRadius: '3px',
  },
}));

export const Search: React.FC<{}> = (props) => {
  const classes = useStyles();

  const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchHeader}>
        <span className={classes.searchHeading}>Trending Now</span>
      </div>
      {data.map((item, key) => {
        return (
          <div className={classes.trendingCoin}>
            <span>&nbsp;</span>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
