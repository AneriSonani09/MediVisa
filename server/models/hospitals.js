const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    city: {type: String, required: true},
    hospitalName: {type: String, required: true},
    state: {type: String, required: true},
    availableSlots: {
        type: Object,
        required: true,
        default: {
          day1: { slot1: 10, slot2: 10, slot3: 10, },
          day2: { slot1: 10, slot2: 10, slot3: 10, },
          day3: { slot1: 10, slot2: 10, slot3: 10, },
          day4: { slot1: 10, slot2: 10, slot3: 10, },
          day5: { slot1: 10, slot2: 10, slot3: 10, },
          day6: { slot1: 10, slot2: 10, slot3: 10, },
          day7: { slot1: 10, slot2: 10, slot3: 10, },
        }
      },
});

const hospitals = mongoose.model("hospitals", hospitalSchema);

module.exports = {hospitals};