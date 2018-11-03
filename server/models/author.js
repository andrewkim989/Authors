var mongoose = require("mongoose");

var AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Please enter in the author's name"],
    minlength: [3, "Author name must be at least three characters long"]}
}, {timestamps: true });

mongoose.model("Author", AuthorSchema);