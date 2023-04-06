// Import required modules
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "20ceuog138@ddu.ac.in", // Replace with your email address
    pass: "#aneri0667#", // Replace with your email password
  },
});

// Define a route for sending emails
router.post("/", (req, res) => {
  const { to, subject, text } = req.body;

  // Create a mail options object
  const mailOptions = {
    from: "20ceuog138@ddu.ac.in", // Replace with your email address
    to: to,
    subject: subject,
    text: text,
    attachments: [{ filename: "hero.jpg", path: "./hero.jpg" }],
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to send email" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

module.exports = router;
