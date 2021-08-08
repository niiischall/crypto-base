import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    flex: 1,
  },
}));

export const Home: React.FC<{}> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <span>&nbsp;</span>
    </div>
  );
};

export default Home;
