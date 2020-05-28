import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Button
} from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	},
	media: {
		height: 140
	}
});

const SearchCard = (props) => {
	const classes = useStyles();
	const { charityName, image, irsClassification, ein } = props.charity;

	return (
		<>
			<Grid item key={props.charity.ein} xs={12} sm={6} md={4}>
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
						<Button size="small" color="primary">
							View
						</Button>
						<Button size="small" color="primary">
							Edit
						</Button>
					</CardActions>
				</Card>
			</Grid>
		</>
	);
};

export default SearchCard;
