import React from 'react';
import { get } from 'lodash';
import { TextField, withStyles } from '@material-ui/core';

interface Props {
  input: any;
  meta: any;
  [x: string]: any;
}

export const StyledTextField = withStyles((theme) => ({
  root: {
    height: 50,
    width: '100%',
    margin: '17.5px 0px',
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#669900',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#669900',
        borderWidth: '2px',
      },
      '&:hover fieldset': {
        borderColor: '#f59842',
        borderWidth: '2px',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#669900',
        borderWidth: '2px',
      },
    },
    '& .Mui-error': {
      fontSize: '10px',
    },
  },
}))((props: any) => <TextField {...props} />);

const TextFieldInput: React.FC<Props> = (props) => (
  <StyledTextField
    error={props.meta.touched && props.meta.error}
    helperText={props.meta.touched && props.meta.error}
    InputProps={{
      ...props.InputProps,
      style: { fontSize: 14 },
    }}
    InputLabelProps={{
      style: { fontSize: 14, color: '#6d758d' },
    }}
    onChange={(event: any, index: any, value: any) =>
      props.input.onChange(value)
    }
    value={get(props, 'input.value', '')}
    variant="outlined"
    {...props.input}
    {...props}
  />
);

export default TextFieldInput;
