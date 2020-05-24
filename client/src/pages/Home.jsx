import React from "react";
import { Container, Grid } from "@material-ui/core";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
          <Container maxwidth="sm">
            <Header />
          </Container>
          <Container maxwidth="md">
            <Grid container spacing={4}>

            </Grid>
          </Container>
      </main>
    </>
  );
};

export default Home;
