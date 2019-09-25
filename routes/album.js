'use strict'

const express = require('express');
const AlbumController = require('../controllers/album');
const api = express.Router();
const auth = require('../middlewares/authenticated');

const multipart = require('connect-multiparty');
const mdUpload = multipart({ uploadDir: './upload/album' });

api.get('/album', auth.ensureAuth, AlbumController.getAlbum);
api.post('/album', auth.ensureAuth, AlbumController.saveAlbum);

module.exports = api;