const mongoose = require('mongoose');
const ratingSchema = new mongoose.Schema({
    comment: {
        type:String,
        
    },
    genre: {
        type: String,
        
      
        
    },
    
    ratings: [{
        genre: {
            type:String,
            
            
        },
        trackid: {
            type: String,
            
            
        },
        rating: {
            type: String,
        }
    }],


});
module.exports =  mongoose.model('Ratings', ratingSchema);