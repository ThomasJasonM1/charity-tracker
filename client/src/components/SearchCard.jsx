import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography
} from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		height: 450
	},
	media: {
		height: 140
	}
});

const SearchCard = (props) => {
	const classes = useStyles();
	const { charityName, image, irsClassification, ein } = props.charity;
	console.log(props.variant);

	return (
		<Grid item key={props.charity.ein} xs={12} sm={6} md={4}>
			<motion.div variants={props.variant}>
				<Card className={classes.root}>
					<CardMedia
						className={classes.media}
						image={image}
						title={charityName}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{charityName}
						</Typography>
						<br />
						<Typography>
							Classification: {irsClassification.classification}
						</Typography>
						<br />
						<Typography>
							Deductibility: {irsClassification.deductibility}
						</Typography>
						<br />
						<Typography>EIN: {ein}</Typography>
					</CardContent>
					<CardActions>
						<Link to={"/organization/" + ein}>View</Link>
						{/* <Link to={"/organization/" + ein}>Edit</Link> */}

					</CardActions>
				</Card>
			</motion.div>
		</Grid>
	);
};

export default SearchCard;
