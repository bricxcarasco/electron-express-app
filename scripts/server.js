const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.get('/users', (req, res) => {
    res.send("Users!");
});

let server = app.listen(PORT, () => {
    console.log(`Express server running on port ${server.address().port}`);
});

module.exports = app;