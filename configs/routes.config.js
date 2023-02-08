const express = require('express');
const router = express.Router();
const commonController = require('../controllers/common.controller');
const tweetsController = require('../controllers/tweets.controller');
const usersController = require('../controllers/users.controller');

router.get('/', commonController.home);

router.get('/tweets', tweetsController.list); //CRUD ==> Read
router.get('/tweets/new', tweetsController.create); //CRUD ==> Create
router.post('/tweets', tweetsController.doCreate); //CRUD ==> Create
router.get('/tweets/:id', tweetsController.detail); //CRUD ==> Read
router.get('/tweets/:id/update', tweetsController.update) //CRUD ==> Update
router.post('/tweets/:id', tweetsController.doUpdate) //CRUD ==> Update
router.post('/tweets/:id/delete', tweetsController.delete); //CRUD ==> Delete

router.get('/users/new', usersController.create); 
router.post('/users', usersController.doCreate);
router.get('/login', usersController.login);
router.post('/login', usersController.doLogin);



module.exports = router;


