import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import './style.css';

export interface Props {}

const useStyles = makeStyles((theme) => ({
  form: {
    margin: theme.spacing(1),
  },
  input: {
    fontSize: 14,
    color: '#323232',
  },
}));

export const SearchInput: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [search, setSearch] = useState<string>('');

  return (
    <FormControl className={classes.form}>
      <Input
        id="input-with-icon-adornment"
        className={classes.input}
        placeholder="Search coins"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon fontSize="large" />
          </InputAdornment>
        }
        disableUnderline={true}
      />
    </FormControl>
  );
};

export default SearchInput;
