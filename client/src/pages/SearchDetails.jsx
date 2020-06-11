import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import API from "../utils/API.js";
const SearchDetails = (props) => {
  const { ein } = useParams();
  console.log("ein", ein);
  console.log("props", props);
  const [charityData, setCharityData] = useState({});
  useEffect(() => {
    API.charitySearchByEIN(ein).then((details) => {
      console.log(details);
      setCharityData(details.data);
    });
  }, {});
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingTop: "7em",
    },
    divStyles: {
      flexGrow: 1,
    },
    addBtn: {
      padding: theme.spacing(2),
      textAlign: "center",
      marginLeft: "20px",
      marginRight: "20px",
    },
  }));
  const classes = useStyles();
  const history = useHistory();
  return (
    <Container>
      <div className={!props.isSignedIn ? classes.root : classes.divStyles}>
        <img
          className="img-fluid causeImage"
          src={charityData.cause && charityData.cause.image}
          alt="Cause"
        />
        <h2>
          {charityData.charityName} (
          {charityData.category && charityData.category.categoryName})
          {props.isSignedIn && (
            <Fab className={classes.addBtn} color="primary" aria-label="add">
              <AddIcon onClick={() => history.push(`/organization/${ein}`)} />
            </Fab>
          )}
          <br />
        </h2>
        <br />
        <h5>
          Rating: {charityData.currentRating && charityData.currentRating.score}
          <img
            id="ratingImage"
            src={
              charityData.currentRating &&
              charityData.currentRating &&
              charityData.currentRating.ratingImage &&
              charityData.currentRating.ratingImage.large
            }
            alt="Rating"
          />
        </h5>
        <br />
        <h5>
          Cause:
          <span> {charityData.cause && charityData.cause.causeName}</span>
        </h5>
      </div>
      <br />
      <h5>Tagline:</h5>
      <textarea
        style={{ width: "550px" }}
        rows="3"
        cols="20"
        className="form-control"
        name="text"
        defaultValue={charityData.tagLine}
        disabled={true}
      />
      <br />
      <br />
      <h5>Mission Statement:</h5>
      <textarea
        style={{ width: "550px" }}
        rows="10"
        cols="70"
        className="form-control"
        name="text"
        defaultValue={charityData.mission}
        disabled={true}
      />
      <br />
      <br />
      <h5>
        IRS Classification:{" "}
        <span id="irsClass">
          {charityData.irsClassification &&
            charityData.irsClassification.classification}
          ,{" "}
        </span>
        <span>
          {charityData.irsClassification &&
            charityData.irsClassification.deductibility}
        </span>
      </h5>
      <br />
      <br />
    </Container>
  );
};
export default SearchDetails;
