const router = require("express").Router();
const { User, validate, bookings } = require("../models/bookings");

router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		const book=new bookings(req.body);
		await book.save();
		return res.status(200).json("done");
		/*const { error } = validate(req.body);
		console.log(error);
		if (error)
			return res.status(400).send({ message: error.details[0].message });
		res.status(201).send({ message: "Booking is done!!!" });
		*/
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});


module.exports = router;