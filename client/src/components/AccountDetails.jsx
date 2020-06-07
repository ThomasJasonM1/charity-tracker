import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
}));

const AccountDetails = (props) => {
  const { className, ...rest } = props;

  const {  firstName, lastName, email, phone, username, password } = props.currentUser;


  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form autoComplete="off" noValidate>
        <CardHeader
          subheader="The information can be edited"
          title="Edit Profile"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                margin="dense"
                name="firstName"
                onChange={props.handleInputChange}
                required
                defaultValue={firstName}
                value={firstName.value}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                margin="dense"
                name="lastName"
                onChange={props.handleInputChange}
                required
                defaultValue={lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                margin="dense"
                name="email"
                onChange={props.handleInputChange}
                required
                defaultValue={email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                margin="dense"
                name="phone"
                onChange={props.handleInputChange}
                type="number"
                defaultValue={phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Change Password"
                margin="dense"
                name="password"
                type="password"
                onChange={props.handleInputChange}
                required
                defaultValue=""
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Username"
                margin="dense"
                name="username"
                onChange={props.handleInputChange}
                required
                defaultValue={username}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
          <TextField
                fullWidth
                label="Confirm Password"
                margin="dense"
                name="confirmPassword"
                type="password"
                onChange={props.handleInputChange}
                variant="outlined"
              />
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button 
            color="primary" 
            variant="contained"
            onClick={()=>console.log(firstName)}
          >
            Save details
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string,
};

export default AccountDetails;
