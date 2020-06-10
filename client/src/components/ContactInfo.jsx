import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import { makeStyles, TextField, Input, InputLabel } from '@material-ui/core';
import { Container, Form, Row, Col } from "react-bootstrap";

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
    <Container>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <Form>
            <Row>
              <Col>
                <Form.Label className="contactLabel">First Name</Form.Label>
                <Form.Control
                  name="firstName"
                  defaultValue={props.charityData ? props.charityData.contact && props.charityData.contact.firstName : ""}
                  className="contactForm shadow-none"
                  onChange={props.handleInputChange}
                />
              </Col>

              <Col>
                <Form.Label className="contactLabel2">Last Name</Form.Label>
                <Form.Control
                  name="lastName"
                  defaultValue={props.charityData ? props.charityData.contact && props.charityData.contact.lastName : ""}
                  className="contactForm2 shadow-none"
                  onChange={props.handleInputChange}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Label className="contactLabel">Phone</Form.Label>
                <Form.Control
                  name="phone"
                  defaultValue={props.charityData ? props.charityData.contact && props.charityData.contact.phone : ""}
                  className="contactForm shadow-none"
                  onChange={props.handleInputChange}
                />
              </Col>

              <Col>
                <Form.Label className="contactLabel2">Email</Form.Label>
                <Form.Control
                  name="email"
                  defaultValue={props.charityData ? props.charityData.contact && props.charityData.contact.email : ""}
                  className="contactForm2 shadow-none"
                  type="email"
                  onChange={props.handleInputChange}
                />
              </Col>
            </Row>
          </Form>
        </div><br />
        
        <div>
          <h5 className="orgContact">Organization Contact Info</h5>

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
    </Container>
  );
}
