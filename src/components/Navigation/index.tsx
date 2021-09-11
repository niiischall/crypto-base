import React, { useContext } from 'react';
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import { Home, Search, Person } from '@material-ui/icons';

import pageContext from '../../services/context';

const StyledTabs = withStyles({
  root: {
    width: '100%',
    borderTop: '2px solid #eeeeee',
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      width: '50%',
      height: 5,
      backgroundColor: ' #669900',
    },
  },
})((props: any) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />
));

const StyledTab = withStyles((theme) => ({
  root: {
    width: '33%',
    textTransform: 'none',
    color: '#323232',
    fontSize: 28,
    fontWeight: 500,
    '&:focus': {
      fontWeight: 700,
    },
  },
}))((props: any) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
);

export const Navigation: React.FC<{}> = (props) => {
  const classes = useStyles(props);
  const { page, switchPage } = useContext(pageContext);

  return (
    <div className={classes.container}>
      <StyledTabs
        value={page}
        onChange={switchPage}
        aria-label="Navigation tabs"
      >
        <StyledTab value="home" icon={<Home fontSize="large" />} />
        <StyledTab value="search" icon={<Search fontSize="large" />} />
        <StyledTab value="profile" icon={<Person fontSize="large" />} />
      </StyledTabs>
    </div>
  );
};

export default Navigation;
