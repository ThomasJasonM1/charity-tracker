import React from "react";
import { Container, Grid } from "@material-ui/core";

import Budget from '../components/Budget';
import TotalUsers from '../components/TotalUsers';
import TasksProgress from '../components/TasksProgress';
import TotalProfit from '../components/TotalProfit';
import CssBaseline from "@material-ui/core/CssBaseline";


const Donate = () => {
  

  return (
      <>
      <CssBaseline />
      <Container maxwidth="sm">
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <Budget />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalUsers />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TasksProgress />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalProfit />
        </Grid>
      </Grid>
      </Container>
      </>
    
  );
};

export default Donate;
