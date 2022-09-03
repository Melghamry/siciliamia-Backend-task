const mongoose = require("mongoose");
const genre = require("../models/genre");
const Ratings = require("../models/ratings");
const user = require("../models/user");
const track = require("../models/track");
const express = require("express");
const survey = require("../models/survey");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    // get user info -store in DB
    const { name, country, email, ratings: trackRates } = req.body;
    const newUser = await user.create({ name, country, email });
    console.log(newUser);

    let newServey = { user: newUser._id };

    // get ratings from
    const storedRatings = await Ratings.insertMany(
      trackRates.map((trackRate) => {
        const { ratings, genre, comment } = trackRate;
        // console.log(ratings);

        return {
          comment: comment,
          genre: genre,
          ratings: ratings.map((ratingObj) => {
            return {
              genre: ratingObj.genre,
              trackid: ratingObj.track_id,
              rating: ratingObj.rating,
            };
          }),
          
        };
      })
    );


    //create survey rating ids
    let ratingsIds = [];
    ratingsIds = storedRatings.map((rating) => rating._id); // ["5f9b9b9b9b9b9b9b9b9b9b9b", "5f9b9b9b9b9b9b9b9b9b9b9b"]
    newServey.ratings = ratingsIds;

    console.log("newServey", newServey);
    // create survey
    const savedSurvey = await survey.create(newServey);

    res.status(201).json("Data added successfully!");
  } catch (err) {
    res.status(500).send("Cannot post survey");
    console.log(err);
  }
});
router.get("/", async (req, res) => {
  try {
    const allSurvey = await survey.find().populate("ratings user");
    res.status(200).json(allSurvey);
  } catch (err) {
    res.status(500).send("Cannot get survey");
  }
});
module.exports = router;