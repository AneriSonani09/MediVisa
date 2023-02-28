const router = require("express").Router();
const {hospitals}  = require("../models/hospitals");

router.get("/", async (req, res) => {
	try {
		console.log(req.body);
		const allHospitals = await hospitals.find({});
        // res.send({data:allHospitals});
		return res.status(200).json({allHospitals});
		// return res.status(200).json({re});
	} catch (error) {
		console.log(error);
		return res.status(500).json({error});
	}
});

module.exports = router;