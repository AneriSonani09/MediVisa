const router = require("express").Router();
const {hospitals}  = require("../models/hospitals");

router.post("/", async (req, res) => {
	try {
		//console.log(req.body);
		const hospital = await hospitals.findOne({_id : req.body.id});
		return res.status(200).json({hospital});
	} catch (error) {
		console.log(error);
		return res.status(500).json({error});
	}
});

module.exports = router;