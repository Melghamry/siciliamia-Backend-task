const mongoose = require('mongoose');
const surveySchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',    
    },
    ratings:[ {
        type: mongoose.Types.ObjectId,
        ref: 'Ratings',
        
    }],
});

module.exports=  mongoose.model('Survey', surveySchema);