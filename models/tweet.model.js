const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
    user: {
        type: String,
        required: 'User is required'
    },
    message: {
        type: String,
        required: 'Message is required'
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // },
    fav: {
        type: Boolean,
        default: false
    }
},
{ timestamps: true }
);

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;

