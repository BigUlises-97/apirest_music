'use strict'
const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/curso_mean2', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('DB Connected');
        app.listen(port, function() {
            console.log('Server running on port ' + port);
        });
    }
});