'use strict'

const path = require('path');
const fs = require('fs');
const mongoosePaginate = require('mongoose-pagination');

const Artist = require('../models/artist');
const Album = require('../models/album');
const Song = require('../models/song');

function getAlbum(req, res) {
    res.status(200).send({ message: 'Accion getAlbum' });
}

function saveAlbum(req, res) {
    var album = new Album();
    var params = req.body;

    album.title = params.title;
    album.description = params.description;
    album.year = params.year;
    album.image = 'null';
    album.artist = params.artist;

    album.save((err, albumStored) => {
        if (err) {
            res.status(500).send({ message: 'Error en la peticion' });
        } else {
            if (!albumStored) {
                res.status(404).send({ message: 'No se guardo el album' });
            } else {
                res.status(200).send({ album: albumStored });
            }
        }
    });
}

module.exports = {
    getAlbum,
    saveAlbum
}