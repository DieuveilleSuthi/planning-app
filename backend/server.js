const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'})
const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB).then(()=> console.log('DB connection successfull'));

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
})