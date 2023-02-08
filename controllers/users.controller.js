const mongoose = require('mongoose');
const User = require('../models/users.model');
const bcrypt = require('bcrypt');



module.exports.create = (req, res, next) => {
    res.render('users/new');
}

module.exports.doCreate = (req, res, next) => {
    User.create(req.body)
    .then(() => {
        res.redirect('/tweets');
    })
    .catch((err) => {
        if(err instanceof mongoose.Error.ValidationError) {
            res.render('users/new', { user: req.body, errors: err.errors });
        } else {
            next(err);
        }

    });
}
module.exports.login = (req, res, next) => {
    res.render('users/login');
}

module.exports.doLogin = (req, res, next) => {
    User.findOne({ email: req.body.email})
        .then((user) => {
            bcrypt
            .compare(req.body.password, user.password)
            .then((ok) => {
                if (ok){
                    res.set('Set-Cookie', `sessionid=${sessioId}`);
                    res.redirect('/tweets');
                }
            
            })
        
        }
    )
}
    
