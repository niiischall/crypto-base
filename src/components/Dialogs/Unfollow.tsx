import React from 'react';
import { DialogTitle, Dialog, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export interface Props {
  onClose: Function;
  open: boolean;
  switchPage: Function;
}

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: 10,
  },
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
    },
  },
}));

export const UnfollowDialog: React.FC<Props> = ({
  onClose,
  open,
  switchPage,
}) => {
  const classes = useStyles();

  const handleClose = (event: any) => {
    onClose();
    switchPage();
  };

  return (
    <Dialog
      className={classes.dialog}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      open={open}
    >
      <DialogTitle className={classes.title} id="dialog-title">
        Please remove the alert to unfollow.
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

export default UnfollowDialog;
