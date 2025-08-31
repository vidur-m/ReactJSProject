const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
    const str = [{
        "name": "Vidur Manikandan",
        "email": "drummer.vidur@gmail.com",
        "username": "vidur-m"
    }];
    res.json(str);
});

router.get('/aboutbutton', (req, res) => {
    res.end('NA');
});

router.get('/auth/github/callback', (req, res) => {
  res.send('GitHub callback received successfully!'); 
});

module.exports = router;