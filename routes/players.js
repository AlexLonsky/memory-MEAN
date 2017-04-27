var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://127.0.0.1:27017/players')
router.get('/players', function (req, res, next) {
    db.players.find( {}).sort( { "score" : 1 }, function (err, players) {
            if(err){
                res.send(err);
            }
            res.json(players)
        })
        } );
router.post('/player', function (req,res,next) {
    var player = req.body;
    db.players.save(player, function (err, player) {
        if(err){
            res.send(err)
        }
        res.json(player)
    });

});
router.delete('/player/:id', function (req, res, next) {
    db.players.remove({_id: mongojs.ObjectID(req.params.id)}, function (err, player) {
        if(err){
            res.send(err)
        }
        console.log(player)
        res.json(player)
    })
});


module.exports = router;