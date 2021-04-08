const express = require('express');
// const data = require('../database/places.js');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html', { });
});

router.get('/welcome', (req, res) => {
    res.render('welcome.html');
});
router.get('/es', (req, res) => {
    res.render('index.html',{});
});


module.exports = router;
