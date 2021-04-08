const express = require('express');
// const data = require('../database/places.js');
const router = express.Router();


router.get('/', (req, res) => {
    res.redirect('/es/welcome');
});

router.get('/es/welcome', (req, res) => {
    res.render('welcome.html');
});
router.get('/es', (req, res) => {
    res.render('index.html',{});
});


module.exports = router;
