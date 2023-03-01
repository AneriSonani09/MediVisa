const router = require("express").Router();
const { User, validate, bookings } = require("../models/bookings");

router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		const book=new bookings(req.body);
		await book.save();
		return res.status(200).json("done");
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});


module.exports = router;