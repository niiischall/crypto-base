import React from 'react';
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';

export interface Props {
  currentPage: string;
  switchPage: Function;
}

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

export const Navigation: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  const { currentPage, switchPage } = props;

  return (
    <div className={classes.container}>
      <StyledTabs
        value={currentPage}
        onChange={switchPage}
        aria-label="Navigation tabs"
      >
        <StyledTab value="home" icon={<HomeIcon fontSize="large" />} />
        <StyledTab value="search" icon={<SearchIcon fontSize="large" />} />
        <StyledTab value="profile" icon={<PersonIcon fontSize="large" />} />
      </StyledTabs>
    </div>
  );
};

export default Navigation;
