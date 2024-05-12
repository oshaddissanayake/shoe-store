const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: '../config.env' });

//Configured the database connection
const URL = process.env.DATABASE||'mongodb+srv://theairpix:p1LZJ6LD7mUHpxyl@shoestore.ylf8dva.mongodb.net/?retryWrites=true&w=majority&appName=shoestore';
mongoose
    .connect(URL,{
    })
    .then(() => console.log('DB connection successful!'));

module.exports = mongoose;
