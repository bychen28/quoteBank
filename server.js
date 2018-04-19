// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
var mongoose = require('mongoose');


// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/authorsDB');
var AuthorSchema = new mongoose.Schema({
    name: { type: String, required:[true,"Title must be filled out"], minlength: 3},
    quotes: [{
         quote:{type: String, required:[true,"Quote Must be filled out "], minlength: 3 },
         createVote:{type: Number, default: 0}
    }] 
}, {timestamps: true });

   mongoose.model('Author',AuthorSchema); // We are setting this Schema in our Models as 'User'
   var Author = mongoose.model('Author') // We are retrieving this Schema from our Models, named 'User'
// Use native promises
// mongoose.Promise = global.Promise;
   
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.use(express.static(path.join(__dirname,'/authors/dist')));

app.get('/authors',function(req,res){
    Author.find({},function(err,tasks){
        if(err){
            console.log(err)
            res.json({message: "Error", error: err})
        } else{
            res.json({message: "Success",data: tasks})
        }
    })
})
app.post('/author',function(req,res){
    console.log("hit the POST DB route")
   console.log(req.body)

    var createAuthor = new Author({name:req.body.newAuthorKey,quotes:[]})
    console.log(req.body.newAuthorKey)
    
    // createPerson.name = req.params.name can set directly or make the value
    createAuthor.save(function(err){
        console.log(err)
       if(err){
            res.json({message: "Error",error: err})
       }
       else{
           res.json({message: "Added Author",createAuthor: createAuthor.errors})
       }
    })
})

app.put('/author/edit/:id',function(req,res){
    console.log("Made it here")
    Author.findOne({_id: req.params.id},function(err,author){
        author.name = req.body.name;
        console.log(author.name)
        author.save(function(err){
           if(err){
            console.log(err)
            res.json({message:"update error",error: err})
           }
           else{
               res.json({message: "Success in Edit"})
           } 
        })
    })  
})
app.put('/author/quote/:id',function(req,res){
    console.log("Adding Quote")
    Author.findOne({_id: req.params.id},function(err,author){
        author.quotes.push({quote:req.body.quote});
        console.log(author.quotes)
        author.save(function(err){
           if(err){
            console.log(err)
            res.json({message:"Error",error: err})
           }
           else{
               res.json({message: "Success Added Quote"})
           } 
        })
    })  
})
app.delete('/remove/:id',function(req,res){
    Author.remove({_id: req.params.id},function(err){
       if(err){
           res.json({message:"error"})
       }
       else{
           res.json({message:"DELETEDTHISSHIT"})
       }
    })
})

app.get('/:id',function(req,res){
    Author.findOne({_id: req.params.id},function(err,task){
        if(err){
            console.log(err)
            res.json({message: "ERROR IS HERE",error: author})
        }
        else{
            res.json({message: "Success", iddata: author})
        }
    })
})
app.all("*",(req,res,next) => {
    res.sendFile(path.resolve("./authors/dist/index.html"))
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
