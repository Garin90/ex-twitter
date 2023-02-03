require('../configs/db.config');

const Tweet = require('../models/tweet.model');

Tweet.deleteMany()
.then(() => {
    for(let i = 1; i <= 100; i++){
        Tweet.create({
            user: `User ${i}`,
            message: `Message ${i}`,
        })
        .then(() => console.log(`Tweet ${i} created`))
        .catch((error) => console.error(error));
    }
})
.catch((error) => console.error(`Tweets cannot be deleted :`, error));