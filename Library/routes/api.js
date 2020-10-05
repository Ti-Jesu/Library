const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Book= require('../models/Book');
const BorrowedBook = require('../models/BorrowedBookHistory')
const Category= require('../models/Category');
const Admin= require('../models/Admin')
const BorrowedBookHistory= require('../models/BorrowedBookHistory')

//Api for the Users
//User login 
router.post('/login', function(req, res, next){
    
    //validation
    if (!req.body.email){
        return res.status(200).json({message:"You must specify an email"});
    }


    //validation
    if (!req.body.password){
        return res.status(200).json({message:"You must specify a password"});
    }
    
    User.findOne({email:req.body.email, password:req.body.password}).then(function(user){

        if(user){
            return res.status(200).json({status:true, message:"Login successful", data: user});
        }else{
            return res.status(200).json({message:"Invalid email or password"});
        }

   }).catch(next);
   });

//get a new user 
router.get('/users/:id', function(req, res, next){
 User.findOne({_id:req.params.id}).then(function(user){
    res.send(user)
}).catch(next);
});

//get all new user 
router.get('/users', function(req, res, next){    //
    User.find().then(function(users){
       res.send(users)
   }).catch(next);
   });

// Add a new user, create 
router.post('/users', function(req, res, next){
    
    //validation
    if (!req.body.email){
        return res.status(200).json({message:"You must specify an email"});
    }

    if (req.body.password.length<5){
        return res.status(200).json({message:"Password too short"});
    }

    User.findOne({email:req.body.email}).then(function(user){
        
        if(user){
            return res.status(200).json({message:"User already exist"});
        }
    })

    User.create(req.body).then(function(user){
        //res.send(user);    
        return res.status(200).json({status:true, message:"Account created", data: user});

    }).catch(next);
});

// update an existing user 
router.put("/user/:id", function(req, res, next){

    if (!req.body.email){
        return res.status(200).json({message:"You must specify an email"});
    }
    if (!req.body.password){
        return res.status(200).json({message:"You must specify a password"});
    }
    if (!req.body.firstname){
        return res.status(200).json({message:"You must specify your first name"});
    }
    if (!req.body.lastname){
        return res.status(200).json({message:"You must specify last name"});
    }
    

    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        User.findOne({_id:req.params.id}).then(function(user){
            return res.status(201).json({status:true, message:"Account updated", data: user})
        }).catch(next); 
    });
});

// Delete a User 
router.delete('/users/:id', function(req, res,next){
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        return res.status(201).json({status:true, message:"Account Deleted", data: user})
    }).catch(next); 
});


//Create Book
router.post('/books', function(req, res, next){

    if (!req.body.bookName){
        return res.status(200).json({message:"You must specify a book title"});
    }
    if (!req.body.categoryId){
        return res.status(200).json({message:"You must specify a category"});
    }
    if (!req.body.author){
        return res.status(200).json({message:"You must specify an Author"});
    }
    if (!req.body.quantity){
        return res.status(200).json({message:"You must specify the quantity"});
    }

    Book.create(req.body).then(function(book){
        return res.status(201).json({status:true, message:"book Created", data: book})   
    }).catch(next);
});


// validation for borrowed books
router.post('/books/borrow', function(req, res, next){

    //validation
    
     if (!req.body.bookId){
        return res.status(400).json({message:"You must specify an book id"});
    }

    if (!req.body.userId){
        return res.status(400).json({message:"You must specify an user id"});
    }


    Book.findOne({_id:req.body.bookId}).then(function(book){
        if(book.quantity>0){
            book.quantity=book.quantity-1;
            book.save(function(err){
                if(err){
                    return res.status(500).save({message:err.message});
                }
            });
        }else{
            return res.status(200).send({status:false, message:"Book not available to be borrowed."});
        }
        BorrowedBookHistory.create(req.body).then(function(book){
            return res.status(200).send({status:true, message:"Book borrowed successfully", data:book});
        }).catch(next);
        //res.send({book:book, status:true, message:"demo"})
    });
   
});

//fetch all books
router.get('/books', function(req, res, next){
    Book.find().then(function(books){
        res.send(books);    
    }).catch(next);
})

//Fetch all borrowed books
router.get('/borrowedbooks', function(req, res, next){
    console.log('Borrowed books')
    BorrowedBook.find().then(function(borrowedbookhistories){
        res.send(borrowedbookhistories);    
    }).catch(next);
})

// update book
router.put('/books/:id', function(req, res, next){
    if (!req.body.bookName){
        return res.status(200).json({message:"You must specify a Title"});
    }
   
    if (!req.body.author){
        return res.status(200).json({message:"You must specify an Author"});
    }
    if (!req.body.quantity){
        return res.status(200).json({message:"You must specify the Quantity"});
    }



    Book.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Book.findOne({_id:req.params.id}).then(function(book){
            return res.status(200).send({status:true, message:"Book Successfully Updated", data:book});
        });
    }).catch(next);  
})

//Find book
router.get('/books/:id', function(req, res, next){
    Book.findById({_id: req.params.id}).then(function(book){
        res.send(book);    
    }).catch(next);
});
// Delete book
router.delete('/books/:id', function(req, res,next){
    Book.findByIdAndRemove({_id: req.params.id}).then(function(book){
        res.send(book);
    }).catch(next); 
});

// Add a new category, create 
router.post('/category', function(req, res, next){
    
    //validation
    if (!req.body.categoryName){
        return res.status(200).json({message:"You must specify category name"});
    }

    Category.findOne({categoryName:req.body.categoryName}).then(function(user){
        
        if(user){
            return res.status(200).json({message:"category Name already exist"});
        }
    })

    Category.create(req.body).then(function(user){
        //res.send(user);    
        return res.status(200).json({status:true, message:"Category Created", data: user});

    }).catch(next);
});


//fetch all categories
router.get('/categories', function(req, res, next){
    Category.find().then(function(categories){
        res.send(categories);    
    }).catch(next);
});
//fetch books of the same category
router.get('/books/cat/:categoryId', function(req, res, next){
    Book.find({categoryId:(req.params.categoryId)}).then(function(book){
        res.send(book);    
    }).catch(next);
});

//Login for Admin
router.post('/admin-login', function(req, res, next){
    
    //validation
    if (!req.body.email){
        return res.status(200).json({message:"You must specify an email"});
    }
    //validation
    if (!req.body.password){
        return res.status(200).json({message:"You must specify a password"});
    }
    
    Admin.findOne({email:req.body.email, password:req.body.password}).then(function(admin){

        if(admin){
            return res.status(200).json({status:true, message:"Login success", data: admin});
        }else{
            return res.status(200).json({message:"Invalid email or password"});
        }

   }).catch(next);
   });
//Create a new Admin
   router.post('/create-admin', function(req, res, next){
    
    //validation
    if (!req.body.email){
        return res.status(200).json({message:"You must specify an email"});
    }

    if (req.body.password.length<5){
        return res.status(200).json({message:"Password too short"});
    }

    Admin.findOne({email:req.body.email}).then(function(admin){
        
        if(admin){
            return res.status(200).json({message:"Admin already exist"});
        }
    })

    Admin.create(req.body).then(function(user){
        //res.send(user);    
        return res.status(200).json({status:true, message:"Account created", data: admin});

    }).catch(next);
});



 module.exports= router;
