// external imports
const express = require("express");
// apply dotenv middleware
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

// defining view engine
app.set("view engine", "ejs");

// internal imports
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

// apply express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//
app.get("/", (req, res) => {
    console.log("GET /");
    res.render("index");
});

// listen for requests
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
