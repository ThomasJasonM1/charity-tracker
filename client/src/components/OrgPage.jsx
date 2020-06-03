import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Fab, makeStyles } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { FormattedInputs } from "./ContactInfo";

import API from "../utils/API";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  addBtn: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginLeft: '20px',
  },
}));

function OrgPage() {
  const classes = useStyles();

  const [org, setOrg] = useState({});

  const { ein } = useParams();
  useEffect(() => {
    getResponse();
  }, []);
  const getResponse = async () => {

    await API.getOrg(ein)
      .then(res => setOrg(res.data))
      .catch(err => console.log(err));
    console.log(org);

  }

  return (
    <Container>
      <div className={classes.root}>

      <img className="img-fluid causeImage" src={org.cause && org.cause.image} />
      <h1>{org.charityName} ({org.category && org.category.categoryName})
          <Fab className={classes.addBtn} color="primary" aria-label="add">
            <AddIcon />
          </Fab><br />
        </h1>

        <h2>Rating: {org.currentRating && org.currentRating.score}
          <img id="ratingImage" src={org.currentRating && org.currentRating && org.currentRating.ratingImage && org.currentRating.ratingImage.large} />
          </h2>
        {/* src="https://placehold.it/300x200" */}

        <h3>EIN: <span>{org.ein}</span></h3>

        <h3>Cause:
    <span> {org.cause && org.cause.causeName}</span>
        </h3>

      </div>

      <h4>Tagline:</h4>
      <textarea
        rows="3"
        cols="50"
        className="form-control"
        name="text"
        defaultValue={org.tagLine}
      // onChange={handleChange}
      /><br /><br />

      <h4>Mission Statement:</h4>
      <textarea
        rows="10"
        cols="70"
        className="form-control"
        name="text"
        defaultValue={org.mission}
      // onChange={handleChange}
      /><br /><br />


      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Do we donation match?</FormLabel>
          <RadioGroup row aria-label="position" name="position" defaultValue="start">
            <FormControlLabel
              value="yes"
              control={<Radio color="primary" />}
              label="Yes"
              labelPlacement="start"
            />
            <FormControlLabel
              value="no"
              control={<Radio color="primary" />}
              label="No"
              labelPlacement="start"
            />
          </RadioGroup>
        </FormControl>
        <br /><br />

        <FormControl component="fieldset">
          <FormLabel component="legend">Do we partner with this organization for volunteering?</FormLabel>
          <RadioGroup row aria-label="position" name="position" defaultValue="start">
            <FormControlLabel
              value="yes"
              control={<Radio color="primary" />}
              label="Yes"
              labelPlacement="start"
            />
            <FormControlLabel
              value="no"
              control={<Radio color="primary" />}
              label="No"
              labelPlacement="start"
            />
          </RadioGroup>
        </FormControl>
        <br /><br />

        <h3>Point of Contact Info</h3>
          <FormattedInputs
          org={org}
        />

      </div>

      <h4>How we can help:</h4>
      <textarea
        rows="10"
        cols="70"
        className="form-control"
        name="text"
      // onChange={handleChange}
      /><br /><br />

      <h3>Upcoming Events: ((calendar??))</h3>
      <br /><br />

      <h3>IRS Classification: <span id="irsClass">{org.irsClassification && org.irsClassification.classification}, </span>
  <span>{org.irsClassification && org.irsClassification.deductibility}</span>
      </h3>

      <br /><br />

    </Container>
  );
}

export default OrgPage;
