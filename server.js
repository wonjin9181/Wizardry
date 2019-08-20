require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var cookieParser = require("cookie-parser")
// const mysql = require("mysql")
const db = require("./models")

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


require('./routes/monsters-api')(app);
require('./routes/createUser-api')(app);
require('./routes/house-api')(app);
require('./routes/login-api')(app);
require('./routes/fight-api')(app)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


const syncOptions = { force: false };

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});