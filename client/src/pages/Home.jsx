import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import Subtitle from "../components/Subtitle";
import charitys from "../components/charitys.json";
import CharityCard from "../components/CharityCard";
import CssBaseline from "@material-ui/core/CssBaseline";

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
		charitys
	};

	render() {
		return (
			<>
				<CssBaseline />
				<main>
					<Container maxwidth="sm">
						<Subtitle />
					</Container>
					<Container style={{ marginTop: "10%" }} maxwidth="md">
						<motion.div
							variants={cardVariant}
							initial="hidden"
							animate="show"
						>
							<Grid container spacing={4}>
								{this.state.charitys.map((charity, index) => {
									return (
										<CharityCard
											key={index}
											id={index}
											charity={charity}
											isSignedIn={this.props.isSignedIn}
											variant={cardVariant}
										/>
									);
								})}
							</Grid>
						</motion.div>
					</Container>
				</main>
			</>
		);
	}
}

export default Home;
