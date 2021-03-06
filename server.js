var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");
var routes = require("./routes")
var express = require("express");
var app = express();

app.use(logger("dev"));
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(express.static(process.cwd() + "/public"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

mongoose.connect("mongodb://localhost/HW_18_Scraper_News");
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Connected to Mongoose!");
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("listening on PORT " + port);
});