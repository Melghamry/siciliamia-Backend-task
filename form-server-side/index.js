const express = require('express');
const mongoose = require('mongoose');

const app = express();
// app.use(bodyparser.json());
// const connectDB = require('./config/db');
// connectDB();


// listening port**
const PORT = process.env.PORT || 3008;
app.listen(PORT, ()=> {
      console.log(`Hello from PORt ${PORT}`)
});
