const express = require('express')
const app = express()
const dotenv =require('dotenv');
const port = 3000
const mongoose = require("mongoose");


dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(() => console.log("db connected")).catch((err) => console.log(err))


app.listen(process.env.PORT||port, () => console.log(`Example app listening on port ${process.env.PORT}!`))