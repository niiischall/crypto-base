import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export interface Props {
  data: any[];
}

const useStyles = makeStyles((theme) => ({
  listingsContainer: {
    height: '355px',
    overflowY: 'auto',
  },
  listing: {
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
      boxShadow: '0 0 0 1px rgb(0 0 0 / 5%), 0 5px 15px rgb(0 0 0 / 15%)',
    },
  },
}));

export const Popular: React.FC<Props> = ({ data }) => {
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

export default Popular;
