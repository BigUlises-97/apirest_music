'use strict'
const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'key'

exports.createToken = function(user) {
    const payload = {
        sub: user._id, //id
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
        image: user.image,
        iat: moment().unix(), //creado
        exp: moment().add(30, 'days').unix //expirado
    };

    return jwt.encode(payload, secret);
};

//Codifica el objeto