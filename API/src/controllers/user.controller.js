var User = require('../models/user.model.js');

exports.create = function(req, res) {
    // Create and Save a new user
    if(!req.body.password) {
        return res.status(400).send({message: "User password can not be empty"});
    }

    var user = new User({email: req.body.email || "email", password: req.body.password});

    user.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the user."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all users from the database.
    User.find(function(err, users){
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while retrieving users"});
        } else {
            res.send(users);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single user with a userId
    // Note.find(function(err, notes){
    //     if(err) {
    //         console.log(err);
    //         res.status(500).send({message: "Some error occurred while retrieving notes."});
    //     } else {
    //         res.send(notes);
    //     }
    // });
};

exports.update = function(req, res) {
    // Update a user identified by the userId in the request
    // Note.findById(req.params.noteId, function(err, note) {
    //     if(err) {
    //         console.log(err);
    //         if(err.kind === 'ObjectId') {
    //             return res.status(404).send({message: "Note not found with id " + req.params.noteId});                
    //         }
    //         return res.status(500).send({message: "Error finding note with id " + req.params.noteId});
    //     }

    //     if(!note) {
    //         return res.status(404).send({message: "Note not found with id " + req.params.noteId});            
    //     }

    //     note.title = req.body.title;
    //     note.content = req.body.content;

    //     note.save(function(err, data){
    //         if(err) {
    //             res.status(500).send({message: "Could not update note with id " + req.params.noteId});
    //         } else {
    //             res.send(data);
    //         }
    //     });
    // });
};

exports.delete = function(req, res) {
    // Delete a user with the specified userId in the request
    // Note.findByIdAndRemove(req.params.noteId, function(err, note) {
    //     if(err) {
    //         console.log(err);
    //         if(err.kind === 'ObjectId') {
    //             return res.status(404).send({message: "Note not found with id " + req.params.noteId});                
    //         }
    //         return res.status(500).send({message: "Could not delete note with id " + req.params.noteId});
    //     }

    //     if(!note) {
    //         return res.status(404).send({message: "Note not found with id " + req.params.noteId});
    //     }

    //     res.send({message: "Note deleted successfully!"})
    // });
};