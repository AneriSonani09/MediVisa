const router = require("express").Router();
const { bookings } = require("../models/bookings");

router.post("/",(req, res) => {
    const book = new bookings(req.body);
    book.save((err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Failed to insert booking');
      } else {
        //console.log(result);
        res.status(200).send(result);
      }
    });  
});

module.exports = router;
