import React, { useState } from "react";
import clsx from "clsx";
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
import API from "../utils/API";

const useStyles = makeStyles(() => ({
  root: {},
}));

const UpdatePassword = (props) => {
  const { className, ...rest } = props;

  const { _id, password } = props.currentUser;

 
  const [confirmedPassword, setConfirmedPassword] = useState("");

  function updateUserPassword() {
    if (password === confirmedPassword) { 
      API.updateAdmin(_id, props.currentUser)
      .then(() => {
        console.log("password successfully updated");
        alert("password successfully updated!");
      })
      .catch((err) => console.log("An error occured", err))
    } else
      alert("Sorry, your passwords do not match");
  }

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form autoComplete="off" noValidate>
        <CardHeader title="Update Password" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Passwords must be at least 8 characters in length"
                label="New Password"
                margin="dense"
                name="password"
                type="password"
                onChange={props.handleInputChange}
                defaultValue=""
                value={password.value}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Confirm Password"
                margin="dense"
                name="confirmedPassword"
                type="password"
                onChange={(event) => setConfirmedPassword(event.target.value)}
                defaultValue=""
                value={confirmedPassword}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          {password.length && confirmedPassword.length >= 8 ? (
            <Button
              color="primary"
              variant="contained"
              onClick={updateUserPassword}
            >
              Update Password
            </Button>
          ) : (
            <Button disabled>Update Password</Button>
          )}
        </CardActions>
      </form>
    </Card>
  );
};

export default UpdatePassword;
