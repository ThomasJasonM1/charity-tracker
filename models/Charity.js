const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charitySchema = new mongoose.Schema({
	ein: {
		type: String,
		required: true,
		unique: true
	},
	isDonationPartner: {
		type: Boolean,
		default: false
	},
	isVolunteerPartner: {
		type: Boolean,
		default: false
	},
	contact: {
		firstName: {
			type: String,
			default: ""
		},
		lastName: {
			type: String,
			default: ""
		},
		email: {
			type: String,
			default: ""
		},
		phone: {
			type: String,
			default: ""
		}
	},
	howWeCanHelp: {
		type: String,
		default: ""
	},
	missionStatement: {
		type: String,
		default: ""
	},
	charityName: {
		type: String,
		default: ""
	},
	events: {
		type: Array,
		default: []
	}
});

const Charity = mongoose.model("Charity", charitySchema);

module.exports = Charity;
