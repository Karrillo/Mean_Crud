const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean_crud';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('Datebase is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;