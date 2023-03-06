const router = require("express").Router();
const {bookings}  = require("../models/bookings");

router.get("/", async (req, res) => {
	try {
		console.log(req.body);
		const allBookings = await bookings.find({});
		return res.status(200).json({allBookings});
	} catch (error) {
		console.log(error);
		return res.status(500).json({error});
	}
});

module.exports = router;
