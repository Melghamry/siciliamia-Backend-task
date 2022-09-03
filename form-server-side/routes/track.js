const express = require('express');
const cloudinary = require('cloudinary');
const mongoose = require('mongoose');
const track = require('../models/track');
const router = express.Router();
// get report
router.get('/', (req, res) => {
    console.log('object')
});
module.exports = router;
