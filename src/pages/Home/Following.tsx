import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export interface Props {}

const useStyles = makeStyles((theme) => ({
  followingContainer: {
    height: '355px',
    width: '100%',
  },
}));

export const Following: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.followingContainer}>
      <span>&nbsp;</span>
    </div>
  );
};

export default Following;
