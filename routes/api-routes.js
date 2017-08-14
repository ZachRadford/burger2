var db = require("../models");


module.exports = function(app) {


    app.get("/", function(req, res) {
      // console.log(db.burgers)

        db.burgers.findAll({}).then(function(dbBurgers) {
            res.render("index", {
              burgers: dbBurgers,
              BONERS: 12
            });
        });

    });


    app.post("/api/Burgers", function(req, res) {

        db.burgers.create({

            burger_name: req.body.name

        }).then(function(dbBurgers) {

            res.redirect("/");
        });

    });


    app.put("/api/Burgers/:id", function(req, res) {
      console.log("here")

        db.burgers.update({
          devoured: req.body.devoured
        }, {
              where: {
                id: req.params.id
              }
            })
            .then(function(dbBurgers) {
                res.redirect("/");
            });

    });


    // app.put("/api/Burgers", function(req, res) {

    //     db.burgers.update({
    //             burger_name: req.body.burger_name
    //         }, {
    //             where: {
    //                 id: req.body.id
    //             }
    //         })
    //         .then(function(dbBurgers) {
    //             res.redirect("/");
    //         });

    // });
};