const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/db/dbConnection");
const router = require("./src/routes/route");

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/todo", router);

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
