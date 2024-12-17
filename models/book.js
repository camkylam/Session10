const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    Book_id: {type: Number, require: true},
    Book_name: {type: String, require: true},
    Author_name: {type: String, require: true},
    Price: {type: String, require: true}, // Assuming price is a number
    Age_group: {type: String, require: true},
    Book_type: {type: String, require: true},
});
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
