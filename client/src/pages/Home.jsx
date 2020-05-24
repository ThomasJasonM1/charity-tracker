import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import Subtitle from "../components/Subtitle";
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
        <main>
          <Container maxwidth="sm">
            <Subtitle />
          </Container>
          <Container style={{marginTop: "10%"}} maxwidth="md">
            <Grid container spacing={4}>
            {this.state.charitys.map((charity, index) => {
                return <CharityCard
                key={index}
                charity={charity}
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