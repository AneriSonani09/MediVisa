const mongoose = require("mongoose");
const Joi = require("joi");

const bookingSchema = new mongoose.Schema({
  userName: { type: String, default: null },
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  mobile: { type: Number, required: true },
  hospitalId: { type: String, required: true },
  isConfirm: { type: String, default: "Pending" },
  date: {type: String, required: true},
  timing: {type: String, required: true},
});

const bookings = mongoose.model("bookings", bookingSchema);

const validate = (data) => {
  const schema = Joi.object({
    Name: Joi.string().required().label("Name"),
    dateOfBirth: Joi.string().required().label("dateOfBirth"),
    email: Joi.string().email().required().label("Email"),
    city: Joi.string().city().required().label("City"),
    contactNumber: Joi.number()
    .contactNumber()
    .required()
    .label("Contact Number"),
    hospital: Joi.string().hospital().required().label("Hospital"),
  });
  return schema.validate(data);
};

module.exports = { bookings, validate };
