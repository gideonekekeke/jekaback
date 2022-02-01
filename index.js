require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const port = process.env.PORT || 2000;
const DB_ONLINE =
	"mongodb+srv://giddy:BqGOcPI8FD0DL2K7@cluster0.7rupp.mongodb.net/JakeDB?retryWrites=true&w=majority";

// const DB_Local = "mongodb://localhost/jakeDB";

const app = express();

const corsOptions = {
	origin: "http://localhost:4000",
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

mongoose
	.connect(DB_ONLINE, {
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("Successfully connected🚀");
	})
	.catch(() => {
		console.log("cannot connect 🚫");
	});

app.get("/", (req, res) => {
	res.json("my api is ready to work");
});

app.use("/api", require("./Router"));

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
