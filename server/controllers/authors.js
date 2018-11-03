const mongoose = require("mongoose");
var Author = mongoose.model("Author");

module.exports = {
    all: function(req, res) {
        Author.find({}, function(err, authors) {
            if (err) {
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json({authors});
            }
        })
    },

    show: function(req, res) {
        Author.findOne({_id: req.params.id}, function(err, author){
            if (err){
               console.log("Returned error", err);
               res.json({message: "Error", error: err});
            }
            else {
               res.json({author});
            }
        })
    },

    create: function(req, res) {
        var name = req.body.name;
        var author = new Author({name: name});

        author.save(function(err){
            if(err){
                res.json({error: err.errors.name.message});
            }
            else {
                res.json({author});
            }
        });
    },

    update: function(req, res) {
        Author.findOne({_id: req.params.id}, function(err, author){
            if (err) {
                console.log("Error. Data not found");
                res.json({message: "Error", error: err});
            }
            else {
                var name = req.body.name;
                author.name = name;
                author.save(function(err){
                    if(err){
                        res.json({error: err});
                    }
                    else {
                        res.json({author});
                    }
                });
            }
        });
    },

    delete: function (req, res) {
        Author.deleteOne({_id: req.params.id}, function (err) {
            if (err){
                res.json({message: "Error", error: err});
            }
            else {
                res.json({success: "Data deleted"});
            }
        })
    }
}