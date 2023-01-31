const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
    user: {
        type: String,
        require: 'User is required'
    },
    message: {
        type: String,
        require: 'Message is required'
    },
    createdAt: {
        type: Date,
        require: "date is require"
    },
    fav: {
        type: Boolean,
        require: true
    }
});

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;

