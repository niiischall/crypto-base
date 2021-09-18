import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Follow from '../../components/Following/Follow';
import Unfollow from '../../components/Following/Unfollow';
import NotificationDialog from '../../components/Dialogs/Notification';

const useStyles = makeStyles((theme) => ({
  followingContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '355px',
    width: '100%',
  },
}));

export const Following: React.FC<{}> = (props) => {
  const classes = useStyles();
  const followingCoins = useSelector((state: any) => state.home.followingCoins);

  const [openNotificationDialog, setNotificationDialogOpen] =
    useState<boolean>(false);

  const handleNotificationDialogOpen = () => {
    setNotificationDialogOpen(true);
  };
  const handleNotificationDialogClose = () => {
    setNotificationDialogOpen(false);
  };

  return (
    <div className={classes.followingContainer}>
      {followingCoins.length > 0 ? (
        <Follow openDialog={handleNotificationDialogOpen} />
      ) : (
        <Unfollow />
      )}
      <NotificationDialog
        onClose={handleNotificationDialogClose}
        open={openNotificationDialog}
      />
    </div>
  );
};

export default Following;
