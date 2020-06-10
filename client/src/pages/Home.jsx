import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import Subtitle from "../components/Subtitle";
import CharityCard from "../components/CharityCard";
import CssBaseline from "@material-ui/core/CssBaseline";
import API from "../utils/API";

const cardVariant = {
	hidden: { x: "100vw", opacity: 0, transition: { staggerChildren: 4 } },
	show: {
		x: 0,
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
			type: "spring",
			stiffness: 35,
			ease: "easeOut",
			duration: 0.25
		}
	}
};

class Home extends Component {
	state = {
		dbCharities: []
	};

	async componentDidMount() {
		const response = await API.getDbCharities();
		this.setState({ dbCharities: response.data });
		console.log(response.data);
	}

	render() {
		return (
			<>
				<CssBaseline />
				<main>
					<Container maxwidth="sm">
						<Subtitle />
					</Container>
					<Container style={{ marginTop: "10%" }} maxwidth="md">
						{this.state.dbCharities.length > 0 ? (
							<motion.div
								variants={cardVariant}
								initial="hidden"
								animate="show"
							>
								<Grid container spacing={4}>
									{this.state.dbCharities.map((charity) => {
										const charityObj = {
											name: charity.charityName,
											id: charity.ein,
											image:
												charity.image ||
												`https://picsum.photos/id/${Math.floor(
													Math.random() * 500
												)}/200/300`,
											isSignedIn: this.props.isSignedIn,
											about: charity.missionStatement,
											showEdit: true
										};
										console.log(charityObj);
										return (
											<CharityCard
												charity={charityObj}
												variant={cardVariant}
											/>
										);
									})}
								</Grid>
							</motion.div>
						) : null}
					</Container>
				</main>
			</>
		);
	}
}

export default Home;
