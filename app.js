const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/db/dbConnection");

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/", (req, res) => {
	res.send("Welcome");
});

const start = async () => {
	try {
		await connectDB();
		app.listen(PORT, (req, res) => {
			console.log(`Server is running on http://localhost:${PORT}`);
		});
	} catch (error) {
		console.log(error.message);
	}
};

start();
