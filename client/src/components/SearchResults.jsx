import React from "react";
import { Grid } from "@material-ui/core";
import CharityCard from "./CharityCard";
import { motion } from "framer-motion";

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

const SearchResults = (props) => {
	return (
		<motion.div variants={cardVariant} initial="hidden" animate="show">
			<Grid container spacing={4}>
				{props.charityList.map((charity) => {
					const charityObj = {
						name: charity.charityName,
						id: charity.ein,
						image:
							charity.image ||
							`https://picsum.photos/id/${Math.floor(
								Math.random() * 500
							)}/200/300`,
						isSignedIn: true,
						about: charity.tagLine,
						showEdit: false
					};
					console.log(charity);
					return (
						<CharityCard
							charity={charityObj}
							variant={cardVariant}
						/>
					);
				})}
			</Grid>
		</motion.div>
	);
};

export default SearchResults;
