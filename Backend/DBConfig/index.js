const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: '../config.env' });

//Configured the database connection
const URL = process.env.DATABASE||'mongodb+srv://admin:admin@shoesdb.0z06ymc.mongodb.net/?retryWrites=true&w=majority&appName=shoesDB';
mongoose
    .connect(URL,{
    })
    .then(() => console.log('DB connection successful!'));

module.exports = mongoose;
