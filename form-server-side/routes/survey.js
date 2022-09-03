const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const multer= require('multer');
const genre = require('../models/genre');
const ratings = require('../models/ratings');
const user = require('../models/user');
const track = require('../models/track');
const express = require('express');
const router = express.Router();

router.post('/',upload.single('track') , async (req, res) => {
    try {
        
        // get user info -store in DB
        const { name, country, email, ratings:trackRates } = req.body;
        let newUser = await user.create({ name, country, email });
        console.log(newUser);
        let newServey = { user: newUser._id }
        // get ratings from
        let storedRatings = await ratings.insertMany(trackRates.map(
            trackRate => {
                return {
                    comment: trackRate.comment
                }
            }
        ));
        let sample = await cloudinary.uploader.upload(req.send())




        
    } catch (err) {
        res.status(500).send('Cannot post survey');
    }

});
router.get('/', async (req, res) => { 
    
    try {
        
    } catch (err) {
        res.status(500).send('Cannot get survey');
    }
});
module.exports = router;