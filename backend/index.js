require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.get('/addHoldings')

app.listen(PORT, async () => {
    console.log("App Started");

    try {
        await mongoose.connect(url);
        console.log("Db connected!");
    } catch (error) {
        console.log("Database connection error:");
        console.log(error.message);
    }
});