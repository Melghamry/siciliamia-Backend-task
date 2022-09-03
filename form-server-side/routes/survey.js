const mongoose = require('mongoose');
const genre = require('../models/genre');
const ratings = require('../models/ratings');
const user = require('../models/user');
const track = require('../models/track');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
         console.log(req.body);
        // get user info -store in DB
        const { name, country, email, ratings:trackRates } = req.body;
        const newUser = await user.create({ name, country, email });
        console.log(newUser);
        let newServey = { user: newUser._id }
        // get ratings from
        const storedRatings = await ratings.create(trackRates.map(
            trackRate => {
                const { ratings } = trackRate;
                console.log(ratings)
                return {
                    comment: trackRate.comment,
                    genre: trackRate.genre,
                    ratings: [{
                        // dummy data not real data 
                    
                        trackid:' ratings.trackid' ,
                        rating: 'ratings.rating',
                        genre: 'ratings.genre',
        }]
                // remains the validation on "not-seleceted" 
             }
         }
          ));

        

        res.status(201).json('Data added successfully!')
    } catch (err) {
        res.status(500).send('Cannot post survey');
        console.log(err)
    }

});
router.get('/', async (req, res) => { 
    
    try {
        
    } catch (err) {
        res.status(500).send('Cannot get survey');
    }
});
module.exports = router;