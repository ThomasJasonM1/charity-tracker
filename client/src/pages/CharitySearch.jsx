import React, { useState } from "react";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import "../styles/CharitySearch.css";

const CharitySearch = () => {
	const [charityList, setCharityList] = useState([]);

	const onSearchSubmit = async (serchTerm) => {
		const KEY = process.env.REACT_APP_API_KEY;
		const response = await axios.get(
			`https://api.data.charitynavigator.org/v2/Organizations?app_id=3e214bfa&app_key=${KEY}&pageSize=25&pageNum=1&search=${serchTerm}`
		);
		console.log(response.data);
		setCharityList(response.data);
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
