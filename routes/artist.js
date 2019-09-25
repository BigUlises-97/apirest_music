'use strict'
const express = require('express');
const ArtistController = require('../controllers/artist');
const auth = require('../middlewares/authenticated');
const multipart = require('connect-multiparty');
const mdUpload = multipart({ uploadDir: './upload/artists' });

const api = express.Router();

api.get('/artist/:id', auth.ensureAuth, ArtistController.getArtist);
api.post('/artist', auth.ensureAuth, ArtistController.saveArtist);
api.get('/artists/:page?', auth.ensureAuth, ArtistController.getArtists);
api.put('/artist/:id', auth.ensureAuth, ArtistController.updateArtist);
api.delete('/artist/:id', auth.ensureAuth, ArtistController.deleteArtist);
api.post('/upload-image-artist/:id', [auth.ensureAuth, mdUpload], ArtistController.uploadImage);
api.get('/get-image-artist/:imageFile', ArtistController.getImageFile);

module.exports = api;