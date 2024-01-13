const express = require('express');

const mongodb = require('./data/database');
const app = express();

const port = process.env.port || 3000;

app.use('/', require('./routes'));


mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to Database and listening on port ${port}`);
    }
});

