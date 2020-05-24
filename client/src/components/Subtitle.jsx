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
        Charity Tracker
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Typography>
    </>
  );
};

export default Subtitle;
