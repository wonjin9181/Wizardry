db = require("../models");

module.exports= function(app){
    app.post("/api/login", function(req, res){
        const login = async (req, res) => {
            try {
              let user = Users.find(user => user.email === req.body.email);
              let isMatch = await checkPassword(req.body.password, user.hashedPassword);
              if (user) {
                if (isMatch) {
                  let token = await createToken(user);
                  console.log('token', token);
                  res.cookie('token', token, cookieOptions).redirect('/users/authorized');
                } else {
                  res.send('sorry password did not match');
                }
              } else {
                res.send('sorry email does not match');
              }
            } catch (err) {
              if (err) throw err;
            }
          };
    })
}