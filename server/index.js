require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const bookRoutes = require("./routes/book");
const bookingsRoutes = require("./routes/confirmbook");
const hospitalRoutes = require("./routes/hospital");
const allHospitals = require("./routes/hosByRegion");
const hospital = require("./routes/hosById");
const bookHisRoutes = require("./routes/bookHistory");
const bookConfirm = require("./routes/confirm");
const selectedHospital = require("./routes/selectSlot")
const formUploadRoutes = require("./routes/formUp");
const sendmail = require("./routes/mail");
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/confirmbook", bookingsRoutes);
app.use("/api/hospital", hospitalRoutes);
app.use("/api/hosByRegion", allHospitals);
app.use("/api/hosById",hospital);
app.use("/api/bookHistory", bookHisRoutes);
app.use("/api/confirm", bookConfirm);
app.use("/api/selectSlot", selectedHospital);
app.use("/api/formUp", formUploadRoutes);
app.use("/api/sendmail", sendmail);

// app.use(require('./api/auth'));
// app.use(require('./api/users'));

const port = process.env.PORT || 8000;
app.listen(port, console.log(`Listening on port ${port}...`));
