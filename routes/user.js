'use strict'

const express = require('express');
const UserController = require('../controllers/user');
const auth = require('../middlewares/authenticated');

const api = express.Router();

var multipart = require('connect-multiparty');
var mdUpload = multipart({ uploadDir: './upload/users' });


api.get('/controlador', auth.ensureAuth, UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);
api.put('/update-user/:id', auth.ensureAuth, UserController.updateUser);
api.post('/upload-image-user/:id', [auth.ensureAuth, mdUpload], UserController.uploadImage);
api.get('/get-image-user/:imageFile', UserController.getImageFile);

module.exports = api;