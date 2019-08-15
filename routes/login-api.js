
const db = require('../models');

module.exports = (app) => {
   

    app.post('/api/login', (req, res) => {
        var email = req.body.email;
        var password = req.body.password;
        console.log(email,password);
        if (email && password) {
            db.User.findOne({
                where: {
                    email: email
                }
            }).then(async (results) => {
                if (!results) {
                    res.send("Invalid user/login");
                    return;
                }
                let hasher = new PasswordHasher();
                let cool = await hasher.verify(password, results.hash, results.salt);
                if (cool) {
                    res.cookie("userData", results.id);
                    res.redirect('/main');
                } else {
                    res.send('Incorrect Username and/or Password!');
                }
                res.end();
            });
        } else {
            res.send('Please enter Username and Password!');
            res.end();
        }
    });

    // app.post('/user/createuser', async (req, res) => {
    //     let hasher = new PasswordHasher();
    //     let hash = await hasher.create(req.body.password);
    //     console.log(hash);

    //     db.User.create({
    //         email: req.body.email,
    //         hash: hash.hash,
    //         salt: hash.salt,
    //         characterName: req.body.username,
    //         house: req.body.house,
    //         characterImg: req.body.img
    //     }).then(dbUser => {
    //         console.log(dbUser);
    //         res.redirect('/');
    //     });
    // });
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
