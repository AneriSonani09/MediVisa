const router = require("express").Router();
const { User, validate, bookings } = require("../models/bookings");

router.post("/", async (req, res) => {
  try {
    const book = new bookings(req.body);
    await book.save();
    const bookedData = req.body;
    console.log(bookedData);

    const obj = {
      bookedData: book,
    };
    return res.status(201).json(obj);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
