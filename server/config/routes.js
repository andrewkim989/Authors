var authors = require("../controllers/authors.js");
var path = require("path");

module.exports = function(app) {
    app.get("/authors", function(req, res) {
        authors.all(req, res);
    });
    
    app.get("/authors/:id", function(req, res) {
        authors.show(req, res);
    });
    
    app.post("/authors", function(req, res) {
        authors.create(req, res);
    });
    
    app.put("/authors/:id", function(req, res) {
        authors.update(req, res);
    });
    
    app.delete("/authors/:id", function(req, res) {
        authors.delete(req, res);
    });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./Authors/dist/Authors/index.html"));
    });
}