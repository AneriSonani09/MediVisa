const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");  
const cookie = require("cookie-parser"); 
const cors = require("cors");

dotenv.config();

//setup
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cookie);
app.use(cors({
    origin: ["http://localhost:3000"],
}));
app.listen(PORT, () => console.log(`server Started on ${PORT}`));

app.get("/test", (req, res) => { res.send("It Works  !!") });
//mongodb+srv://aneri123:<password>@cluster0.yaisxot.mongodb.net/?retryWrites=true&w=majority
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
    if (err) return console.err(err);
    console.log("MongoDB Connected");
    })

app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/customerRouter"));