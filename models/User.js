const mongoose = require("mongoose"),
	Schema = mongoose.Schema;

const userSchema = new Schema({
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
		type: Number,
		default: ""
	},
	image: {
		type: String,
		default: ""
	},
	username: {
		type: String,
		required: true,
		index: { unique: true }
	},
	password: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("User", userSchema);
