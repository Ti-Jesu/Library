const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')

//setup express app
const app = express();
// password is tijesuoladimeji
const MONGODB_URL= 'mongodb+srv://Userdb:tijesuoladimeji@cluster0.akuhh.azure.mongodb.net/<dbname>?retryWrites=true&w=majority'
//connect to mongodb, mongoose provides us with a connection string
mongoose.connect(MONGODB_URL||'mongodb://localhost/Userdb',{
    useNewUrlParser: true,
    useUnifiedTopology:true
}); //database we wanna connect to and option we can pass to mongodb
mongoose.Promise=global.Promise //

mongoose.connection.on('connected',()=>{
console.log('Mongoose is connected!!!')
});

app.use(cors()) // Use this after the variable declaratio
// bodyParser to attach our json text to the message 
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));


//error handling by middleware
app.use(function(err, req,res,next){
    //console.log(err)
    res.status(422).send({error:err.message});
})
// Listening for request
app.listen(process.env.PORT||3000, function(){
    console.log("we are listening for request");

})