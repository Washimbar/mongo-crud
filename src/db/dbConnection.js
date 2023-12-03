const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
	try {
		mongoose.connect(process.env.DB_CONNECT_URL);
		console.log("DB connection established");
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = connectDB;
