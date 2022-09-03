const express = require('express');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');
const app = express();
// const connectDB = require('./database/connectDB')
// connectDB()
app.use(express.json());
app.use('/api/tracks', require('./routes/track'))
app.use('/api/survey', require('./routes/survey'));
const PORT = process.env.PORT || 3008;
app.listen(PORT, ()=> {
      console.log(`Hello from PORt ${PORT}`)
});
