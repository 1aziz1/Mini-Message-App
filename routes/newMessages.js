const express = require ('express');
const router  = express.Router();

router.get('/new', (req, res) =>{
    res.render('form',{title:  "New Message"});

});

module.exports = router;

