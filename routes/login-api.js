db = require("../models");
const { checkPassword } = require('../utilities/passwordService');

module.exports = function (app) {
    app.post("/api/login", function (req, res) {

        db.User.findAll({
            where: {
                email: req.body.email
            }
        }).then(function (data) {
            let isMatch = await checkPassword(req.body.password, data[0].password);
            if (isMatch) {
                res.status(200)
                res.Json(data)
            } else {
                res.send('sorry password did not match');
            }

        })


    })
}