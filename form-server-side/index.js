const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cloudinary = require('cloudinary');
const app = express();
const connectDB = require('./database/connectDB')
connectDB()
// built in middlewares
app.use(cors());
app.use(express.json());
app.options('*', cors())
app.use('/api/tracks', require('./routes/track'))
app.use('/api/survey', require('./routes/survey'));
const PORT = process.env.PORT || 3008;
app.listen(PORT, ()=> {
      console.log(`Hello from PORt ${PORT}`)
});
