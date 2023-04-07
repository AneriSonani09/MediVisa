const router = require("express").Router();
const { hospitals} = require("../models/hospitals");

// GET request to fetch hospital slots for a specific date
router.get("/:id/slots/:date", async (req, res) => {
    try {
      const hospital = await hospitals.findOne({ _id: req.params.id });
      const slot = hospital.slots.find((slot) => slot.date === req.params.date);
      if (!slot) {
        hospital.slots.push({
          date: req.params.date,
          timing: [
            { time: "9:00 to 12:00 AM", slots: 10 },
            { time: "12:00 to 3:00 PM", slots: 10 },
            { time: "3:00  to 6:00 pm", slots: 10 },
          ],
        });
        await hospital.save();
        res.status(200).json(hospital.slots[hospital.slots.length - 1]);
      } else {
        res.status(200).json(slot);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  });
  

module.exports = router;