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

// PUT request to decrement slot count
// router.put("/:id/slots/:date/:time", async (req, res) => {
//   try {
//     const hospital = await hospitals.findById(req.params.id);
//     if (!hospital) {
//       return res.status(404).json({ error: "Hospital not found" });
//     }
//     const slot = hospital.slots.find(
//       (s) => s.date === req.params.date && s.timing[0].time === req.params.time
//     );
//     if (slot) {
//       slot.timing[0].slots--;
//       await hospital.save();
//       res.status(200).json(slot);
//     } else {
//       res.status(404).json({ error: "Slot not found" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error });
//   }
// });

  

module.exports = router;