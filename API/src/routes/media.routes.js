module.exports = function(app) {

    var media = require('../controllers/media.controller.js');

    // Create a new media
    app.post('/media', media.create);

    // Retrieve all media
    app.get('/media', media.findAll);

    // Retrieve a single media with mediaId
    app.get('/media/:mediaId', media.findOne);

    // Update a media with mediaId
    app.put('/media/:mediaId', media.update);

    // Delete a media with mediaId
    app.delete('/media/:mediaId', media.delete);
}