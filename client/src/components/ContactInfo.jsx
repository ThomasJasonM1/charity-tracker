import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import { makeStyles, TextField, Input, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export function FormattedInputs(props) {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    textmask: '( )    -    ',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          name="firstName"
          InputLabelProps={{ shrink: true }}
          label="First Name"
          size="small"
          onChange={props.handleInputChange}
        />
        <TextField
          name="lastName"
          InputLabelProps={{ shrink: true }}
          label="Last Name"
          size="small"
          onChange={props.handleInputChange}
        />
        <TextField
          name="email"
          label="Email"
          InputLabelProps={{ shrink: true }}
          size="small"
          onChange={props.handleInputChange}
        />
        <br /><br />
        <InputLabel htmlFor="formatted-text-mask-input">Phone</InputLabel>
        <Input
          name="phone"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
          onChange={props.handleInputChange}
        />
      </div><br />
      <div>
        <h3>Organization Contact Info</h3>

        <TextField
          label="Web Address"
          InputLabelProps={{ shrink: true }}
          id="webAddress"
          size="small"
          value={props.org.websiteURL} /><br /><br />
        <TextField
          label="Mailing Address"
          InputLabelProps={{ shrink: true }}
          value={props.org.mailingAddress && props.org.mailingAddress.streetAddress1}
          id="street"
          size="small" />
        <TextField
          label="City"
          InputLabelProps={{ shrink: true }}
          value={props.org.mailingAddress && props.org.mailingAddress.city}
          id="city"
          size="small" />
        <TextField
          label="State"
          InputLabelProps={{ shrink: true }}
          value={props.org.mailingAddress && props.org.mailingAddress.stateOrProvince}
          id='state'
          size="small" />
        <TextField
          label="Zip Code"
          InputLabelProps={{ shrink: true }}
          value={props.org.mailingAddress && props.org.mailingAddress.postalCode}
          id="zipcode"
          size="small" />

        <br /><br />

        <InputLabel htmlFor="formatted-text-mask-input">Phone</InputLabel>
        <Input
          value={props.org.phoneNumber}
          onChange={handleChange}
          name="textmask"
          id="phone"
          inputComponent={TextMaskCustom}
        />
        <TextField
          label="Email"
          value={props.org.generalEmail}
          InputLabelProps={{ shrink: true }}
          id="email"
          size="small" />
        <br /><br />
      </div>
      <br />

    </form>
  );
}
