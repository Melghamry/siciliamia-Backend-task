const mongoose = require('mongoose');
 
const trackSchema = new mongoose.Schema({
    url: {
        type:String,
    },
    genre: {
        type: mongoose.Types.ObjectId,
        ref:'Genre',
    },

});
module.exports=  mongoose.model('Track', trackSchema);