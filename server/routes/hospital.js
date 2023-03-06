const router = require("express").Router();
const { hospitals} = require("../models/hospitals");

router.get("/api/hos", async (req, res) => {
  try {
    const allHospitals = await hospitals.find({})
    // .then((data) => {
    //   console.log("Data: ", data);
    //   return res.json({ data });
    return res.status(200).json({ allHospitals });
  }
  catch {
    console.log(error);
    return res.status(500).json({ error });
  }
});

module.exports = router;