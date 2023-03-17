const express = require("express");
const app = express();
const port = 3000;

// Set up an array of available time slots for each day
const availableTimeSlots = {
  Monday: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"],
  Tuesday: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"],
  Wednesday: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"],
  Thursday: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"],
  Friday: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"],
};

// Set up an object to keep track of booked appointments
const bookedAppointments = {};

// Endpoint to get the available time slots for a given day
app.get("/api/time-slots/:day", (req, res) => {
  const day = req.params.day;

  if (!availableTimeSlots[day]) {
    res.status(404).send("Invalid day");
    return;
  }

  // Filter out any time slots that have already been booked
  const availableSlots = availableTimeSlots[day].filter((slot) => {
    return !bookedAppointments[day] || !bookedAppointments[day].includes(slot);
  });

  res.send(availableSlots);
});

// Endpoint to book an appointment
app.post("/api/appointments", express.json(), (req, res) => {
  const { day, time, name } = req.body;

  // Check if the requested time slot is available
  if (!availableTimeSlots[day] || !availableTimeSlots[day].includes(time)) {
    res.status(400).send("Invalid appointment time");
    return;
  }

  // Check if the requested time slot has already been booked
  if (bookedAppointments[day] && bookedAppointments[day].includes(time)) {
    res.status(400).send("Appointment time already booked");
    return;
  }

  // Book the appointment
  if (!bookedAppointments[day]) {
    bookedAppointments[day] = [];
  }
  bookedAppointments[day].push(time);

  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`Appointment booking app listening at http://localhost:${port}`);
});
