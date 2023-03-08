const router = require("express").Router();
const {hospitals}  = require("../models/hospitals");

router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		const allHospitals = await hospitals.find({state : req.body.regionName});
		console.log("Beforee")
		console.log(allHospitals)
		console.log("After")
        // res.send({data:allHospitals});
		return res.status(200).json({allHospitals});
		// return res.status(200).json({re});
	} catch (error) {
		console.log(error);
		return res.status(500).json({error});
	}
});

module.exports = router;