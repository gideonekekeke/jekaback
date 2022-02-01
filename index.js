const express = require("express");
const port = process.env.PORT || 2000;

const app = express();

app.get("/", (req, res) => {
	res.send("api is working");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
