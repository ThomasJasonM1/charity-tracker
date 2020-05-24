import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import charitys from "../components/charitys.json";
import CharityCard from "../components/CharityCard";
import CssBaseline from '@material-ui/core/CssBaseline';

class Home extends Component {
  state = {
    charitys
  }

  render() {  
    return (
      <>
        <CssBaseline />
        <Navbar />
        <main>
          <Container maxwidth="sm">
            <Header />
          </Container>
          <Container style={{marginTop: "10%"}} maxwidth="md">
            <Grid container spacing={4}>
            {this.state.charitys.map((charity, index) => {
                return <CharityCard
                key={index}
                name={charity.name}
                image={charity.image}
                about={charity.about}
                />
            })}
            </Grid>
          </Container>
        </main>
      </>
    );
  }
}

export default Home;