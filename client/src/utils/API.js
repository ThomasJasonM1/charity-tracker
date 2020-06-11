import axios from "axios";

export default {
	// Signs in an admin
	adminLogin: function (credentials) {
		return axios.post("/api/user/login", credentials);
	},
	//updates admin details
	updateAdmin: function (id, updatedInfo) {
		return axios.put("/api/user/"+ id, updatedInfo);
	},

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
	// General charity nav search
	charityNavSearch: function (searchTerm) {
		return axios.get("/api/charity/nav/name/" + searchTerm);
	},
	// Searches for a specific charity by EIN
	charitySearchByEIN: function (ein) {
		return axios.get("/api/charity/nav/ein/" + ein);
	},
	signUpToVolunteer: function (contact) {
		return axios.post("/api/user/volunteer", contact);
	}
};