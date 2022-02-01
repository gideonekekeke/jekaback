const mongoose = require("mongoose");

const mySchema = mongoose.Schema({
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	name_prefix: {
		type: String,
	},

	data_of_birth: {
		type: String,
		required: true,
		format: "DD-MM-YYYY",
	},
});

module.exports = mongoose.model("allusers", mySchema);
