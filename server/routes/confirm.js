const router = require('express').Router();
const {bookings} = require("../models/bookings");

router.post("/", async(req, res) => {
    try{
        console.log(req.body);
        const booking = await bookings.findOneAndUpdate({ _id: req.body.id  }, {
            $set : {
                isConfirm : "Accept"
            }
        }, {
                new: true
        }
        
        );
        if (!booking) {
            return res
              .status(404)
              .json({ msg: `No booking available with this id ${id}` });
          }
          res.status(200).json({ msg : "donee"});
        
    }catch(error){
        console.log(error);
        return res.status(500).json({error});
    }
});

module.exports = router;