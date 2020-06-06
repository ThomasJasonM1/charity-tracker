import React from "react";
import { Grid, Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import AccountProfile from "../components/AccountProfile";
import AccountDetails from "../components/AccountDetails";

const Profile = () => {

  return (
    <>
      <CssBaseline />
      <Container maxwidth="sm">
        <Grid container spacing={4}>
          <Grid item lg={4} md={6} xl={4} xs={12}>
            <AccountProfile />
          </Grid>
          <Grid item lg={8} md={6} xl={8} xs={12}>
            <AccountDetails />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
