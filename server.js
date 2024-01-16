const express = require('express');

const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;
const dotenv = require(('dotenv'));
dotenv.config();

app.use('/', require('./routes'));


mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to Database and listening on port ${port}`);
    }
});

