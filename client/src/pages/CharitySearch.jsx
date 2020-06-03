import React, { useState } from "react";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import API from "../utils/API";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import "../styles/CharitySearch.css";

const CharitySearch = () => {
	const [charityList, setCharityList] = useState([]);

	const onSearchSubmit = (searchTerm) => {
		API.charityNavSearch(searchTerm)
			.then((response) => {
				setCharityList(response.data);
				console.log(response.data);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="charity-search">
			<CssBaseline />
			<Container>
				<SearchBar onSearchSubmit={onSearchSubmit} />
				<SearchResults charityList={charityList} />
			</Container>
		</div>
	);
};

export default CharitySearch;
