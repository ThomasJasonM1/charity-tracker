import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import API from "../utils/API";
import "../styles/CharitySearch.css";

const CharitySearch = () => {
	const [charityList, setCharityList] = useState([]);

	// const onSearchSubmit = () => {
	// 	API.searchCharityNav().then((response) => {
	// 		console.log(response.data);
	// 	});
	// };

	const onSearchSubmit = async (serchTerm) => {
		const KEY = process.env.REACT_APP_API_KEY;
		const response = await axios.get(
			`https://api.data.charitynavigator.org/v2/Organizations?app_id=3e214bfa&app_key=${KEY}&pageSize=25&pageNum=1&search=${serchTerm}`
		);
		console.log(response.data);
	};

	return (
		<div className="charity-search">
			<SearchBar onSearchSubmit={onSearchSubmit} />
		</div>
	);
};

export default CharitySearch;
