import React, { useContext } from 'react';
import { DialogTitle, Dialog, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import pageContext, { pages } from '../../services/context';

export interface Props {
  onClose: Function;
  open: boolean;
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
    },
  },
}));

export const NotSignedInDialog: React.FC<Props> = ({ onClose, open }) => {
  const classes = useStyles();
  const { switchPage } = useContext(pageContext);

  const handleClose = (event: any) => {
    onClose();
    switchPage(event, pages.profile);
  };

  return (
    <Dialog
      className={classes.dialog}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      open={open}
    >
      <DialogTitle className={classes.title} id="dialog-title">
        Please sign in/sign up to continue.
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

export default NotSignedInDialog;
