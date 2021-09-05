import * as React from 'react';
import { Avatar, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 250,
    maxHeight: 155,
    position: 'absolute',
    overflowY: 'auto',
    top: 43.5,
    left: '15%',
    zIndex: 1,
    backgroundColor: '#fff',
    boxShadow:
      'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
    borderRadius: '0px 0px 5px 5px',
    transition: 'all .2s',
  },
  root: {
    marginRight: 10,
    fontSize: 14,
    backgroundColor: '#669900',
  },
  secondary: {
    color: '#323232',
    fontSize: '14px !important',
    fontWeight: 'normal',
    lineHeight: '1.43rem !important',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textShadow: 'none',
    whiteSpace: 'nowrap',
  },
  textContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));

export interface Props {
  results: any[];
  search: Function;
}

export const SearchResults: React.FC<Props> = ({ results, search }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {results.map((coin: any) => {
        return (
          <MenuItem key={coin.id} onClick={() => search(coin.name, coin.slug)}>
            <Avatar
              classes={{
                root: classes.root,
              }}
            >
              <Search />
            </Avatar>
            <div className={classes.textContainer}>
              <span className={classes.secondary}>{coin.name}</span>
            </div>
          </MenuItem>
        );
      })}
    </div>
  );
};

export default SearchResults;
