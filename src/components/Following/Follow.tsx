import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export interface Props {}

const useStyles = makeStyles((theme) => ({}));

export const Follow: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <span>Coins following!</span>
    </React.Fragment>
  );
};

export default Follow;
