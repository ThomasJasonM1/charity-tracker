import React from 'react';
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

const useStyles = makeStyles(() => ({
  root: {},
}));

const UpdatePassword = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return ( 
    <Card {...rest} className={clsx(classes.root, className)}>
      <form autoComplete="off" noValidate>
      <CardHeader
          title="Update Password"
        />
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
                required
                defaultValue=""
                variant="outlined"
              />
          </Grid>
          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Confirm Password"
                margin="dense"
                name="password"
                required
                defaultValue=""
                variant="outlined"
              />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions>
          <Button 
            color="primary" 
            variant="contained"
          >
            Update Password
          </Button>
        </CardActions>
        </form>
    </Card>
   );
}
 
export default UpdatePassword;