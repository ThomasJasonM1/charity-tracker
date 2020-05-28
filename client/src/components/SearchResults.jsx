import React from "react";
import { Grid } from "@material-ui/core";
import SearchCard from "./SearchCard";

const SearchResults = (props) => {
	return (
		<Grid container spacing={4}>
			{props.charityList.map((charity) => {
				return <SearchCard charity={charity} />;
			})}
		</Grid>
	);
};

export default SearchResults;
