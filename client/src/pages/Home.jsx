import React from "react";
import { Container } from "@material-ui/core";
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
      </main>
    </>
  );
};

export default Home;
