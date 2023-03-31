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
const allHospitals = require("./routes/hos");
const bookHisRoutes = require("./routes/bookHistory");
const bookConfirm = require("./routes/confirm");
const selectedHospital = require("./routes/selectSlot")
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
app.use("/api/hos", allHospitals);
app.use("/api/bookHistory", bookHisRoutes);
app.use("/api/confirm", bookConfirm);
app.use("/api/selectSlot", selectedHospital);

// app.use(require('./api/auth'));
// app.use(require('./api/users'));

const port = process.env.PORT || 8000;
app.listen(port, console.log(`Listening on port ${port}...`));
