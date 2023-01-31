const express = require('express');
const router = express.Router();
const commonController = require('../controllers/common.controller');
const tweetsController = require('../controllers/tweets.controller');

router.get('/', commonController.home);
router.get('/tweets', tweetsController.list);

module.exports = router;