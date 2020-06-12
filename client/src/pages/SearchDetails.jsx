import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Button,
	Container,
	Fab,
	makeStyles,
	Backdrop,
	CircularProgress
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import API from "../utils/API.js";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const SearchDetails = (props) => {
  const { ein } = useParams();
  const [charityData, setCharityData] = useState({});
  const [contactData, setContactData] = useState({});
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubscribe = () => {
    API.signUpToVolunteer(contactData);
    handleClose();
  }

  const handleInputChange = (event) => {
    let { name, value } = event.target;
		setContactData({ ...contactData, [name]: name === 'phone' ? value.replace(/\D/g, '').trim() : value .trim()});
	}

  useEffect(() => {
    API.charitySearchByEIN(ein).then((details) => {
      setCharityData(details.data);
      setContactData({...contactData, orgName: details.data.charityName.trim()})
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
    backdrop: {	
			zIndex: theme.zIndex.drawer + 1,	
			color: "#fff",
		},
  }));
  const classes = useStyles();
  const history = useHistory();
    
  if (!charityData.charityName) {	
		return (	
			<Backdrop className={classes.backdrop} open={true}>	
				<CircularProgress color="inherit" />	
			</Backdrop>	
		);	
	}
  
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
        defaultValue={charityData.mission && charityData.mission.replace(/<br>/g, '')}
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
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Sign Up to Volunteer
      </Button>
      <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            We will use your phone number to send you text messages about upcoming volunteer opportunities.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="firstName"
            label="First Name"
            type="name"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="lastName"
            label="Last Name"
            type="name"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Phone Number"
            type="phone"
            fullWidth
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubscribe} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </Container>
  );
};
export default SearchDetails;
