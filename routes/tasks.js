var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://127.0.0.1:27017/cards')

router.get('/tasks', function (req, res, next) {
    db.cards.find(function (err, cards) {
        if(err){
            res.send(err);
        }
        res.json(cards)
    });
});

module.exports = router;