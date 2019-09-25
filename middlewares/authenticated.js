'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'key';

exports.ensureAuth = function(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'Sin autenticacion' });
    }
    var token = req.headers.authorization.replace(/['"]+/g, ''); //eliminar ' y ""
    try {
        var payload = jwt.decode(token, secret);
        if (payload.exp <= moment().unix()) {
            return res.status(401).send({ message: 'Token expirado' });
        }
    } catch (err) {
        console.log(err);
        return res.status(404).send({ message: 'Token no valido' });
    }
    req.user = payload;
    next();
};