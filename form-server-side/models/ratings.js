const mongoose = require('mongoose');
const ratingSchema = new mongoose.Schema({
    comment: {
        type:String,
        
    },
    genre: {
        type: mongoose.Types.ObjectId,
        ref: 'Genre',
        
    },
    ratings:[ {
        track: {
            type:mongoose.Types.ObjectId,
            ref: 'Track',
        },
        rating: {
            type: Number,
        }
    }],


});
module.exports =  mongoose.model('Ratings', ratingSchema);