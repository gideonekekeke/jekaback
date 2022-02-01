const express = require("express");
const router = express.Router();
const allUsers = require("./ModelSchema");

//getting all the files
router.get("/user", async (req, res) => {
	const AllData = await allUsers.find();
	try {
		res.status(200).json({
			message: "Succefull 💻 ",
			data: AllData,
		});
	} catch (error) {
		res.status(404).json({
			message: "getting all data failed 😣",
			data: AllData,
		});
	}
});

//getting a files by id
router.get("/user/:id", async (req, res) => {
	const gettingId = await allUsers.findById(req.params.id);
	try {
		res.status(200).json({
			message: "Succefull 💻",
			data: gettingId,
		});
	} catch (error) {
		res.status(404).json({
			message: "getting all data failed 😣",
			data: gettingId,
		});
	}
});

router.post("/user", async (req, res) => {
	const SendingData = await allUsers.create({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		username: req.body.username,
		data_of_birth: req.body.data_of_birth,
		// name_prefix:
		// 	req.body.first_name.charAt(0).toUpperCase() +
		// 	req.body.last_name.charAt(0).toUpperCase(),
	});
	try {
		res.status(201).json({
			message: "Succefull 💻",
			data: SendingData,
		});
	} catch (error) {
		res.status(404).json({
			message: "getting all data failed 😣",
			data: SendingData,
		});
	}
});

router.patch("/user/:id", async (req, res) => {
	try {
		const updated = await allUsers.findByIdAndUpdate(
			req.params.id,
			EditingUser,
		);
		res.status(200).json({
			message: "Succefull 💻",
			data: updated,
		});
	} catch (error) {
		res.status(404).json({
			message: "getting all data failed 😣",
			data: updated,
		});
	}
});

router.delete("/user/:id", async (req, res) => {
	const deleteUser = await allUsers.deleteOne(
		{ username: req.params.id },
		req.body,
	);
	try {
		res.status(201).json({
			message: " Delected Succefully 💻",
		});
	} catch (error) {
		res.status(404).json({
			message: "getting all data failed 😣",
			data: deleteUser,
		});
	}
});

module.exports = router;
