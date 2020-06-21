const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(require('../routes/users'));

let server = app.listen(PORT, () => {
    console.log(`Express server running on port ${server.address().port}`);
});

module.exports = app;