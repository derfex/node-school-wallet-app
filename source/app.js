'use strict';
const config = require('./config.json');

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`<!doctype html>
    <html>
        <head>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <h1>Hello Smolny!</h1>
        </body>
    </html>`);
});

app.get('/error', (req, res) => {
    throw Error('Oops!');
});

app.get('/transfer', (req, res) => {
    const {amount, from, to} = req.query;
    res.json({
        result: 'success',
        amount,
        from,
        to
    });
});

app.listen(config.PORT, () => {
    console.log('YM Node School App listening on port ' + config.PORT + '!');
});
