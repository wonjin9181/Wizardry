var db = require("../models");

module.exports = function (app) {
    app.get("/api/house/:house", function (req, res){
        db.House.findAll({
            where:{
                houseName: req.params.house
            }
        })
        .then(function(dbHouse){
            res.json(dbHouse)
        })
        .catch(function(err){
            console.log(err)
        })
    })



}