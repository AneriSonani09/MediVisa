const router = require("express").Router();
const {bookings}  = require("../models/bookings");

router.get("/", async(req, res) => {
    try{
        bookings.find({userName: req.body.userName})
        .then((data) => {
            console.log('Data: ', data);
            return res.json({data});
        })
        .catch((error) => {
            console.log(error);
        });
        
        // console.log(req.body);
        // const bookHistory = await bookings.find({});
        // let history;
        // const obj = {
        //     history: bookHistory,
        // }
        // console.log("/////");
        // console.log(history);
        // return res.status(201).json(obj);
    }catch (error) {
		console.log(error);
		return res.status(500).json({error});
	}
});

module.exports = router;