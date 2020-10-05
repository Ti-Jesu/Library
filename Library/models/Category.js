const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Category schema and Model
const CategorySchema = new Schema({
    categoryName:{type: String, required: [true, 'Category Name field is required'], unique:true, trim:true},

}, {timestamps:true});

// A 'Category' model will represent a 'Category' collection(mongoose will create a collection called Categorys)
const Category = mongoose.model('Category', CategorySchema);

module.exports=Category;
