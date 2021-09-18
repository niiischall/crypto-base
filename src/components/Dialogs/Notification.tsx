import React from 'react';
import { useSelector } from 'react-redux';
import { DialogTitle, Dialog, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export interface Props {
  onClose: Function;
  open: boolean;
}

const useStyles = makeStyles((theme) => ({
  authButton: {
    height: 30,
    margin: '0px auto 10px auto',
    width: 150,
    borderRadius: '30px',
    color: '#fff',
    fontSize: '12px',
    textTransform: 'capitalize',
    backgroundColor: '#11a683',
  },
  title: {
    '& .MuiTypography-h6': {
      fontSize: 14,
      textAlign: 'center',
      width: 150,
    },
  },
}));

export const NotificationDialog: React.FC<Props> = ({ onClose, open }) => {
  const classes = useStyles();
  const coins = useSelector((state: any) => state.home.notificationCoins);

  const handleClose = (event: any) => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="dialog-title" open={open}>
      <DialogTitle className={classes.title} id="dialog-title">
        {coins.length > 0 ? `Alert created.` : `Alert removed.`}
      </DialogTitle>
      <Button
        className={classes.authButton}
        size="medium"
        type="submit"
        variant="contained"
        onClick={(event: any) => handleClose(event)}
      >
        Continue
      </Button>
    </Dialog>
  );
};

export default NotificationDialog;
