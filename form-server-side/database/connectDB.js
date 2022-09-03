const mongoose = require('mongoose');
const connectDB = async () => {
    const connection = await mongoose.connect('mongodb+srv://i8amry:99890700@cluster0.oqih46z.mongodb.net/ghamry');
    console.log(`MongoDB connected:${mongoose.connection.host}`);

};
    module.exports = connectDB; 