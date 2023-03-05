const router = require('express').Router();
const {bookings} = require("../models/bookings");

router.post("/", async(req, res) => {
    try{
        console.log(req.body);
        const userBooked = await bookings.find({userName: req.body.uName});
        return res.status(200).json({userBooked});
    }catch(eroor){
        console.log(error);
        return res.status(500).json({error});
    }
});

module.exports = router;