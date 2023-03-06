const mongoose = require("mongoose");
const Joi = require("joi");

const bookingSchema = new mongoose.Schema({
  userName: { type: String, default: null },
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  mobile: { type: Number, required: true },
  isConfirm: { type: String, default: "Pending" },
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
  });
  return schema.validate(data);
};

module.exports = { bookings, validate };
