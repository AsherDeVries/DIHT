var Media = require('../models/media.model.js');

exports.create = function(req, res) {
    // Create and Save a new media
    if(!req.body.userId) {
        return res.status(400).send({message: "Please provide a userId. "});
    }

    var media = new Media(
        {
            type: req.body.type || "",
            title: req.body.title,
            year: req.body.year,
            description: req.body.description,
            userId: req.body.userId
        }
    );

    media.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the media."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all medias from the database.
    if(req.query.title) {
        req.query.title = new RegExp(req.query.title, 'i')
    }

    Media.find(req.query, function(err, medias){
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while retrieving medias"});
        } else {
            res.send(medias);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single media with a mediaId
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
    // Update a media identified by the mediaId in the request
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
    // Delete a media with the specified mediaId in the request
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