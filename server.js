

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static("public"));

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ 
	defaultLayout: "main",
	helpers: function (Handlebars, options)  { 
  		Handlebars.registerHelper("log", function(something) {
    		console.log(something);
  		});
	}
}));

app.set("view engine", "handlebars");


require("./routes/api-routes.js")(app);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
