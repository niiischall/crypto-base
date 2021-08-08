import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    flex: 1,
  },
}));

export const Search: React.FC<{}> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.searchContainer}>
      <span>&nbsp;</span>
    </div>
  );
};

export default Search;
