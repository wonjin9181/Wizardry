db = require("../models");
var monsterData = require(__dirname + "/../script/monsters.json")


module.exports = function(app) {

    app.get("/api/monsters",function(req, res){
        db.Monsters.bulkCreate(monsterData,{return:true})
        .then(function(dbMonsters){
            res.json(dbMonsters)
        })
        .catch(function(err){
            console.log(err)
        })
    })

    app.get("/api/monsters/:id", function(req, res){
        console.log(req.params.id)
        const { id } = req.params;
        db.Monsters.findOne({ where: { id } })
        .then(function(dbMonster){
            console.log("dbMonster", dbMonster)
            res.json(dbMonster)
        })
        .catch(function(err){
            console.log(err)
        })
    })

}