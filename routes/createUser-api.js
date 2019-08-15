db = require("../models")

const { hashedPassword } = require('../util/passwordService')

module.exports = function(app) {

    app.post("/api/users", async function(req, res){
        console.log(req.body)
        let hasher = new PasswordHasher();
        let hash = await hasher.create(req.body.password);
        
        db.Users.create({
            email:req.body.email,
            house:req.body.house,
            characterName:req.body.username,
            hash: hash.hash,
            salt: hash.salt
        })
        .then(function(dbUser){
            res.json(dbUser)
            res.status(200)
        })
        .catch(function(err){
            console.log(err)
        })
        // console.log("========="+req.body)
        // db.House.create({
        //     where:{
        //         houseName:req.body.house,
        //         user:req.body.username
        //     }
        // })
        // .then(function(dbHouse){
        //     res.json(dbHouse)
        // })
        // .catch(function(err){
        //     console.log(err)
        // })
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

    // app.put("/api/users/:id", function(req, res){

    //     db.User.update(
    //         {
    //             strength = req.body.strength
    //         },
    //         {
    //             where: req.params.id
    //         }
    //     )
    //     .then(function(rowUpdated){
    //         res.json(rowUpdated)
    //     })
    //     .catch(function(err){
    //         console.log(err)
    //     })
    // })


}


const crypto = require('crypto');


function PasswordHasher() {
}
    PasswordHasher.prototype.create = async function (password) {
        let salt = crypto.randomBytes(32).toString('hex');
        let rval = await this.hash(password, salt);
        return rval;
    }
    PasswordHasher.prototype.verify = async function (password, hashed, salt) {
        let hash = await this.hash(password, salt);
        return hashed === hash.hash;
    }
    PasswordHasher.prototype.hash = async function (password, salt) {
        return new Promise((resolve, reject) => {
            let hasher = crypto.createHmac('sha512', salt);
            let hash = hasher.update(password);
            let iterations = 25000;
            function doOne() {
                hash.update(password);
                if (iterations--) {
                    process.nextTick(doOne);
                } else {
                    resolve({
                        salt: salt,
                        hash: hash.digest('hex')
                    });
                }
            }
            doOne();
        });
    }