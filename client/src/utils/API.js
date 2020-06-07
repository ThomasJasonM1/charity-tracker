import axios from "axios";

export default {
	/**************************************************
	 * Calls to user collection in our charityTracker DB - more of these can be added, if need be.
	 **************************************************/

	// Signs in an admin
	adminLogin: function (credentials) {
		return axios.post("/api/user/login", credentials);
	},

	getAdmin: function (id) {
		return axios.get("/api/user/" + id);
	},

	updateAdmin: function (id, adminData) {
		return axios.put("/api/user/" + id, adminData);
	},

	/**************************************************
	 * Calls to charity collection in our charityTracker DB
	 **************************************************/

	// Gets a charity from th db by ein
	getDbCharity: function (ein) {
		return axios.get("/api/charity/" + ein);
	},
	// Get all charities from the db
	getDbCharities: function () {
		return axios.get("/api/charity/");
	},
	// Updates charity in the db via id
	updateDbCharity: function (id, charityData) {
		return axios.put("/api/charity/" + id, charityData);
	},
	// Adds a new charity to the db.
	createDbCharity: function (charityData) {
		return axios.post("/api/charity", charityData);
	},
	// Deletes a charity from the db - we haven't talked about this feature (that I'm aware of) but we could implement it.
	deleteDbCharity: function (id) {
		return axios.delete("/api/charity/" + id);
	},

	/**************************************************
	 * Calls to third party charityNav API
	 **************************************************/

	// Search for charity by name - also accepts ein
	charityNavSearch: function (searchTerm) {
		return axios.get("/api/charity/nav/name/" + searchTerm);
	},
	// Searches for a specific charity by EIN
	charitySearchByEIN: function (ein) {
		return axios.get("/api/charity/nav/ein/" + ein);
	},

	/**************************************************
	 * Calls to our DB and to the third party charityNav API - returns a combined response from both
	 **************************************************/

	charityDbAndNavSearchByEIN: function (ein) {
		return axios.get("/api/charity/dbnav" + ein);
	}
};
