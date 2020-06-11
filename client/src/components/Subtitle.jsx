import React from "react";
import { Typography } from "@material-ui/core";

const Subtitle = () => {
  return (
    <>
      <Typography
        style={{ marginTop: "10%" }}
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Your Charities
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        “Whatever community organization, whether it’s a women’s organization,
        or fighting for racial justice … you will get satisfaction out of doing
        something to give back to the community that you never get in any other way.”
        <br />
        — Ruth Bader Ginsburg
      </Typography>
    </>
  );
};

export default Subtitle;
