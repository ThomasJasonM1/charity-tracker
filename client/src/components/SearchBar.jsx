import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "95%"
		}
	}
}));

const SearchBar = (props) => {
	const [searchTerm, setSearchTerm] = useState("");

	const onInputChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const onFormSubmit = (event) => {
		event.preventDefault();

		props.onSearchSubmit(searchTerm);
	};

	return (
		<form
			className={useStyles().root}
			noValidate
			autoComplete="off"
			onSubmit={onFormSubmit}
		>
			<TextField
				value={searchTerm}
				id="standard-basic"
				label="Search Organizations"
				onChange={onInputChange}
				type="text"
			/>
		</form>
	);
};

export default SearchBar;
