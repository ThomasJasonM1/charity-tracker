import React from "react";
import { Grid } from "@material-ui/core";
import CharityCard from "./CharityCard";

const SearchResults = (props) => {
  return (
    <Grid container spacing={4}>
      {props.charityList.map((charity) => {
        const charityObj = {
          name: charity.charityName,
          id: charity.ein,
          image:
            charity.image ||
            `https://picsum.photos/id/${Math.floor(
              Math.random() * 500
            )}/200/300`,
          isSignedIn: true,
          about: charity.tagLine,
          showEdit: false,
        };
        console.log(charity);
        return <CharityCard charity={charityObj} />;
      })}
    </Grid>
  );
};

export default SearchResults;
