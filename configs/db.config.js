const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tweets';

mongoose.connect(MONGODB_URI)
.then(() => {
    console.info(`Succesfully connected to ${MONGODB_URI}`);
})
.catch((error) => {
    console.error(`Cannot connect to ${MONGODB_URI} because ${error}`)
})