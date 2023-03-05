const router = require("express").Router();
const { hospitals} = require("../models/hospitals");

router.get("/", async (req, res) => {
	try {
		hospitals.find({ state: req.body.state  })
        .then((data) => {
            console.log('Data: ', data);
            return res.json({data});
        })
        .catch((error) => {
            console.log('error: ', error);
        });
		console.log("Dhruvi");
	} catch (error) {
		return res.status(500).send({ message: "Internal Server Error!!!!!!!" });
	}
});

module.exports = router;