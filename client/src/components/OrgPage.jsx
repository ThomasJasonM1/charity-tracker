import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
	Container,
	FormControl,
	FormControlLabel,
	FormLabel,
	RadioGroup,
	Fab,
	makeStyles,
	Switch,
	Backdrop,
	CircularProgress,
	Button
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import { FormattedInputs } from "./ContactInfo";
import API from "../utils/API.js";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	addBtn: {
		padding: theme.spacing(2),
		textAlign: "center",
		marginLeft: "20px",
		marginRight: "20px"
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: "#fff"
	}
}));

function OrgPage() {
	const classes = useStyles();

	const [org, setOrg] = useState("");
	const [charityData, setCharityData] = useState({
		isDonationPartner: false
	});

	const { ein } = useParams();
	useEffect(() => {
		API.getDbCharity(ein)
			.then((res) => setCharityData(res.data || {}))
			.catch((err) => console.log(err));

		if (!org) {
			const getResponse = () => {
				API.charitySearchByEIN(ein)
					.then((res) => {
						setOrg(res.data);
					})
					.catch((err) => console.log(err));
			};
			getResponse();
		}
	}, [org, ein]);

	function handleInputChange(event) {
		let { name, value } = event.target;
		setCharityData({ ...charityData, [name]: value });
	}

	const handleChange = (event) => {
		setCharityData({
			...charityData,
			[event.target.name]: event.target.checked
		});
	};

	const handleAddOrg = (event) => {
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
			missionStatement: org.mission,
			charityName: org.charityName,
			events: charityData.events
		})
			.then(() => {
				alert(`${org.charityName} was added to your database!`);
			})
			.catch((err) => console.log(err));
	};

	const handleEditOrg = (event) => {
		event.preventDefault();
		console.log(charityData);

		const id = charityData.ein;
		API.updateDbCharity(id, {
			ein: charityData.ein,
			isDonationPartner: charityData.isDonationPartner,
			isVolunteerPartner: charityData.isVolunteerPartner,
			contact: {
				firstName: charityData.firstName,
				lastName: charityData.lastName,
				email: charityData.email,
				phone: charityData.phone
			},
			howWeCanHelp: charityData.howWeCanHelp,
			charityName: org.charityName,
			events: charityData.events
		})
			.then(() => {
				alert(`${org.charityName} was edited successfully!`);
			})
			.catch((err) => console.log(err));
	};

	if (!org) {
		return (
			<Backdrop className={classes.backdrop} open={true}>
				<CircularProgress color="inherit" />
			</Backdrop>
		);
	}

	return (
		<Container>
			<div className={classes.root}>
				<img
					className="img-fluid causeImage"
					src={org.cause && org.cause.image}
					alt="Cause"
				/>
				<h2>
					{org.charityName} (
					{org.category && org.category.categoryName})
					<Fab
						className={classes.addBtn}
						color="primary"
						aria-label="add"
					>
						<AddIcon onClick={handleAddOrg} />
					</Fab>
					<Fab color="secondary" aria-label="edit">
						<EditIcon onClick={handleEditOrg} />
					</Fab>
					<br />
				</h2>

				<h5>
					Rating: {org.currentRating && org.currentRating.score}
					<img
						id="ratingImage"
						src={
							org.currentRating &&
							org.currentRating &&
							org.currentRating.ratingImage &&
							org.currentRating.ratingImage.large
						}
						alt="Rating"
					/>
				</h5>

				<h5>
					EIN: <span>{org.ein}</span>
				</h5>

				<h5>
					Cause:
					<span> {org.cause && org.cause.causeName}</span>
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
				defaultValue={org.tagLine}
				// onChange={handleChange}
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
				defaultValue={org.mission && org.mission.replace(/<br>/g, '')}
				// onChange={handleChange}
			/>
			<br />
			<br />

			<div>
				<FormControl component="fieldset">
					<FormLabel component="legend" style={{ color: "black" }}>
						<h5>Do we donation match?</h5>
					</FormLabel>
					<RadioGroup
						row
						aria-label="position"
						name="position"
						defaultValue="start"
					>
						<FormControlLabel
							name="isDonationPartner"
							control={<Switch color="primary" />}
							// label="Yes"
							labelPlacement="start"
							onChange={handleChange}
							checked={charityData.isDonationPartner || false}
						/>
					</RadioGroup>
				</FormControl>
				<br />
				<br />

				<FormControl component="fieldset">
					<FormLabel component="legend" style={{ color: "black" }}>
						<h5>
							Do we partner with this organization for
							volunteering?
						</h5>
					</FormLabel>
					<RadioGroup
						row
						aria-label="position"
						name="position"
						defaultValue="start"
					>
						<FormControlLabel
							name="isVolunteerPartner"
							control={<Switch color="primary" />}
							// label="Yes"
							labelPlacement="start"
							onChange={handleChange}
							checked={charityData.isVolunteerPartner || false}
						/>
					</RadioGroup>
				</FormControl>
				<br />
				<br />

				<h5>Point of Contact Info</h5>
				<FormattedInputs
					org={org}
					handleInputChange={handleInputChange}
					charityData={charityData}
				/>
			</div>

			<h5>How we can help:</h5>
			<textarea
				style={{ width: "550px" }}
				rows="10"
				cols="70"
				className="form-control"
				name="howWeCanHelp"
				onChange={handleInputChange}
				defaultValue={charityData ? charityData.howWeCanHelp : ""}
			/>
			<br />
			<br />

			<h5>Upcoming Events: ((calendar??))</h5>
			<br />
			<br />

			<h5>
				IRS Classification:{" "}
				<span id="irsClass">
					{org.irsClassification &&
						org.irsClassification.classification}
					,{" "}
				</span>
				<span>
					{org.irsClassification &&
						org.irsClassification.deductibility}
				</span>
			</h5>
			<br />
			<br />
		</Container>
	);
}

export default OrgPage;
