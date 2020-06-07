import React from "react";
import { Grid, Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import AccountProfile from "../components/AccountProfile";
import AccountDetails from "../components/AccountDetails";
import UpdatePassword from "../components/UpdatePassword";

const Profile = (props) => {

  return (
    <>
      <CssBaseline />
      <Container maxwidth="sm">
        <Grid container spacing={4}>
          <Grid item lg={4} md={6} xl={4} xs={12}>
            <AccountProfile currentUser={props.currentUser}/>
          </Grid>
          <Grid item lg={8} md={6} xl={8} xs={12}>
            <AccountDetails 
              currentUser={props.currentUser}
              handleInputChange={props.handleInputChange}  
            />
          </Grid>
          <Grid item lg={4} md={6} xl={4} xs={12}>
            <UpdatePassword 
             currentUser={props.currentUser}
             handleInputChange={props.handleInputChange}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
