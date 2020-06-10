import React from "react";
import { CssBaseline, Container } from "@material-ui/core";

import OrgPage from "../components/OrgPage";

const Organization = () => {

	return (
		<>
			<CssBaseline />
			<Container maxWidth="lg">
				<div className="wrapper">
				<OrgPage />
				</div>
			</Container>
		</>
	);
};

export default Organization;
