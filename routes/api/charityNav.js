const axios = require("axios");
require("dotenv").config();
const API_KEY = process.env.REACT_APP_API_KEY;
const API_ID = process.env.REACT_APP_API_ID;

module.exports = {
	searchByName: function (searchTerm) {
		return axios.get(
			`https://api.data.charitynavigator.org/v2/Organizations?app_id=${API_ID}&app_key=${API_KEY}&pageSize=25&pageNum=1&search=${searchTerm}&minRating=0`
		);
	},

	searchByEin: function (ein) {
		return axios.get(
			`https://api.data.charitynavigator.org/v2/Organizations/${ein}?app_id=${API_ID}&app_key=${API_KEY}`
		);
	}
};
