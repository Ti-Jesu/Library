const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create a Book schema and Model
const BookSchema = new Schema({
    bookName:{type:String, required: [true, 'Name field is required']},
    author:{type:String, required:[true,'Name field is required']},
    rating:{type:Number},
    description:{type:String},
    quantity:{type:Number, required:[true,'Name field is required']},
    categoryId:{type:String, required:[true,'Name field is required']},
    image:{type:String},
    date:{type:String},
    
},{timestamps:[true]});

const Book = mongoose.model('book', BookSchema);

module.exports=Book;