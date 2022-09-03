const mongoose = require('mongoose');
const connectDB = async () => {
        const connection = await mongoose.connect(process.env.DATABASE_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        
        console.log(`MongoDB connected: ${connection.connection.host}`)

    }
    module.exports = connectDB; 