//Dependencies:
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ type: 'application/*+json' }))

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

app.use(bodyParser.text({ type: 'text/html' }))

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});