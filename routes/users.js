const express = require('express');
const mysql = require('../scripts/mysqlConnection');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: "Hello World!"
    })
});

router.get('/users', (req, res) => {
    let SQL = "SELECT id, name, email FROM users";
    mysql.query(SQL, (error, result, fields) => {
        if (error) {
            console.log(error);
        }
        res.json(result);
    });
});

module.exports = router;