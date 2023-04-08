const router = require("express").Router();
const { hospitals} = require("../models/hospitals");

// PUT request to decrement slot count
router.patch("/:id/slots/:date/:time", async (req, res) => {
    try {
      const hospital = await hospitals.findById(req.params.id);
      if (!hospital) {
        return res.status(404).json({ error: "Hospital not found" });
      }
      const slot = hospital.slots.find(
        (s) => s.date === req.params.date && s.timing[0].time === req.params.time
      );
      if (slot) {
        slot.timing[0].slots--;
        await hospital.save();
        res.status(200).json(slot);
      } else {
        res.status(404).json({ error: "Slot not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  });
  
    
  
  module.exports = router;