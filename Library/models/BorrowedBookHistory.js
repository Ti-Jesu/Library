const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create a Book schema and Model
const BorrowedBookHistorySchema = new Schema({
    bookId:{type:String, required: [true, 'Name field is required']},
    userId:{type:String, required:[true,'Name field is required']},
    bookName:{type:String},
    userName:{type:String},
},{timestamps:[true]});

const BorrowedBookHistory = mongoose.model('borrowedBookHistory', BorrowedBookHistorySchema);

module.exports=BorrowedBookHistory;