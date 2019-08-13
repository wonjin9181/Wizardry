db = require("../models");


var monsterData = require(__dirname + "/../script/monsters.json")


module.exports = function(app) {

    app.get("/api/monsters",function(req, res){
        console.log(monsterData)
        db.Monsters.bulkCreate(monsterData,{return:true})
        .then(function(dbMonsters){
            res.json(dbMonsters)
        })
        .catch(function(err){
            console.log(err)
        })
        // db.Monsters.findAll({})
        // .then(function(dbMonsters){
        //     res.json(dbMonsters)
        // })
    })

}