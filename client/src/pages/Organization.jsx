import React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import Header from "../components/Header";
import OrgPage from "../components/OrgPage";

const Organization = (props) => {
	const sections = [
		{ title: "Volunteer", url: "#" },
		{ title: "Donate", url: "#" },
		{ title: "Contact", url: "#" }
	];
	return (
		<>
			<CssBaseline />
			<Container maxWidth="lg">
				<Header sections={sections} />
				<div className="wrapper">
				<OrgPage />
				</div>
			</Container>
		</>
	);
};

export default Organization;
