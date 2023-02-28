const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    city: {type: String, required: true},
    hospitalName: {type: String, required: true},
    state: {type: String, required: true}
});

const hospitals = mongoose.model("hospitals", hospitalSchema);

module.exports = {hospitals};