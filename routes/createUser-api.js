db = require("../models")
hashedPassword
const { hashedPassword } = require('../util/passwordService')

module.exports = function(app) {
    app.post("/api/users", function(req, res){

        db.Users.create(req.body)
        .then(function(dbUser){
            res.json(dbUser)
            res.status(200)
        })
        .catch(function(err){
            console.log(err)
        })

        db.House.create({
            where:{
                houseName:req.body.house,
                user:req.body.userName
            }
        })
        .then(function(dbHouse){
            res.json(dbHouse)
        })
        .catch(function(err){
            console.log(err)
        })
    })

    app.get("/api/users/:id", function(req, res){
       
        db.Users.findAll({
            where:{
                id: req.params.id
            }
        })
        .then(function(dbUser){
            res.json(dbUser)
        })
        .catch(function(err){
            console.log(err)
        })
    })

    app.put("/api/users/:id", function(req, res){

        db.User.update(
            {
                strength = req.body.strength
            },
            {
                where: req.params.id
            }
        )
        .then(function(rowUpdated){
            res.json(rowUpdated)
        })
        .catch(function(err){
            console.log(err)
        })
    })


}