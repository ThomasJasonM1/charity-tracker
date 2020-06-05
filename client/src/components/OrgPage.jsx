import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Fab, makeStyles } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { FormattedInputs } from "./ContactInfo";
import API from "../utils/API.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  addBtn: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginLeft: '20px',
    marginRight: '20px',
  },
}));

function OrgPage() {
  const classes = useStyles();

  const [org, setOrg] = useState("");
  const [charityData, setCharityData] = useState({});

  const { ein } = useParams();
  useEffect(() => {

    API.getDbCharity(ein)
    .then(res => setCharityData(res.data))
    .catch(err => console.log(err));

    if (!org) {
      const getResponse = async () => {

        API.charitySearchByEIN(ein)
          .then(res => {
            setOrg(res.data[0])
          })
          .catch(err => console.log(err));
      }
      getResponse();
    }
  }, [org, ein]);
  console.log(org);

  // useEffect(() => {
  //   API.getDbCharity(ein)
  //   .then(res => setCharityData(res.data))
  //   .catch(err => console.log(err));
  // }, []);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCharityData({...charityData, [name]: value })
  };

  const handleAddOrg = event => {
    event.preventDefault();

    API.createDbCharity({
      ein: org.ein,
      isDonationPartner: charityData.isDonationPartner,
      isVolunteerPartner: charityData.isVolunteerPartner,
      contact: {
        firstName: charityData.firstName,
        lastName: charityData.lastName,
        email: charityData.email,
        phone: charityData.phone
      },
      howWeCanHelp: charityData.howWeCanHelp,
      events: charityData.events
    })
      .then(() => { alert(`${org.charityName} was added to your database!`) })
      .catch(err => console.log(err));
  }

  const handleEditOrg = event => {
    event.preventDefault();

    const id = ein;
    API.updateDbCharity(id, {
      ein: ein,
      isDonationPartner: charityData.isDonationPartner,
      isVolunteerPartner: charityData.isVolunteerPartner,
      contact: {
        firstName: charityData.firstName,
        lastName: charityData.lastName,
        email: charityData.email,
        phone: charityData.phone
      },
      howWeCanHelp: charityData.howWeCanHelp,
      events: charityData.events
    })
      .then(() => { alert(`${org.charityName} was edited successfully!`) })
      .catch(err => console.log(err));
  }

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  return (
    <Container>
      <div className={classes.root}>

        <img className="img-fluid causeImage" src={org.cause && org.cause.image} alt="Cause" />
        <h1>{org.charityName} ({org.category && org.category.categoryName})
          <Fab className={classes.addBtn} color="primary" aria-label="add">
            <AddIcon
              onClick={handleAddOrg}
            />
          </Fab>

          <Fab color="secondary" aria-label="edit">
            <EditIcon
              onClick={handleEditOrg}
            />
          </Fab>
          <br />
        </h1>

        <h2>Rating: {org.currentRating && org.currentRating.score}
          <img id="ratingImage" src={org.currentRating && org.currentRating && org.currentRating.ratingImage && org.currentRating.ratingImage.large} alt="Rating" />
        </h2>

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
      />
      <br /><br />

      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Do we donation match?</FormLabel>
          <RadioGroup row aria-label="position" name="position" defaultValue="start">
            <FormControlLabel
              value="true"
              name="isDonationPartner"
              control={<Radio color="primary" />}
              label="Yes"
              labelPlacement="start"
              onChange={handleInputChange}
            />
            <FormControlLabel
              value="false"
              name="isDonationPartner"
              control={<Radio color="primary" />}
              label="No"
              labelPlacement="start"
              onChange={handleInputChange}
            />
          </RadioGroup>
        </FormControl>
        <br /><br />

        <FormControl component="fieldset">
          <FormLabel component="legend">Do we partner with this organization for volunteering?</FormLabel>
          <RadioGroup row aria-label="position" name="position" defaultValue="start">
            <FormControlLabel
              value="true"
              name="isVolunteerPartner"
              control={<Radio color="primary" />}
              label="Yes"
              labelPlacement="start"
              onChange={handleInputChange}
            />
            <FormControlLabel
              value="false"
              name="isVolunteerPartner"
              control={<Radio color="primary" />}
              label="No"
              labelPlacement="start"
              onChange={handleInputChange}
            />
          </RadioGroup>
        </FormControl>
        <br /><br />

        <h3>Point of Contact Info</h3>
        <FormattedInputs
          org={org}
          handleInputChange={handleInputChange}
          charityData={charityData}
        />
      </div>

      <h4>How we can help:</h4>
      <textarea
        rows="10"
        cols="70"
        className="form-control"
        name="howWeCanHelp"
        onChange={handleInputChange}
        defaultValue={charityData.howWeCanHelp}
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
