require('./configs/db.config')
require('dotenv').config();


const express = require('express');
const app = express();
const logger = require('morgan');

app.use(express.urlencoded()); // This is called for be able to use req.body
app.use(logger('dev'));
require('./configs/hbs.config');

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`));

const router = require(`${__dirname}/configs/routes.config`);
app.use(router);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500);
    res.send("Ops, an error has occurred")
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Application running at port: ${port}`)); 