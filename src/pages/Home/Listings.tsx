import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export interface Props {
  data: any[];
}

const useStyles = makeStyles((theme) => ({
  listingsContainer: {
    height: 390,
    overflowY: 'auto',
  },
  listing: {
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
    borderRadius: '5px',
    backgroundColor: '#eeeeee',
    width: '85%',
    height: 75,
    margin: '0px auto',
    marginTop: 15,
    marginBottom: 15,
    transition: 'all .2s linear',
    '&:hover': {
      backgroundColor: '#f8f8f8',
    },
  },
}));

export const Listings: React.FC<Props> = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.listingsContainer}>
      {data.map((coin, index) => {
        return (
          <div key={index} className={classes.listing}>
            <span>&nbsp;</span>
          </div>
        );
      })}
    </div>
  );
};

export default Listings;
