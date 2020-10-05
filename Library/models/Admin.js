const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Admin schema and Model
const AdminSchema = new Schema({
    email:{type: String, required: [true, 'Email field is required'], unique:true, trim:true},
    firstname:{type: String, required: [true, 'First Name field is required']},
    lastname:{type: String, required: [true, 'Last Name field is required']},
    password:{type: String, required: [true, 'Password field is required'], trim:true},
}, {timestamps:true});

// A 'Admin' model will represent a 'user' collection(mongoose will create a collection called users)
const Admin = mongoose.model('admin', AdminSchema);

module.exports=Admin;