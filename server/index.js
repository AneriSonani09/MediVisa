require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const bookRoutes = require("./routes/book");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/book", bookRoutes);
// app.use(require('./api/auth'));
// app.use(require('./api/users'));

const port = process.env.PORT || 8000;
app.listen(port, console.log(`Listening on port ${port}...`));