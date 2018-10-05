const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./config/connection');

//settings 
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

//routes
app.use(require('./routes/routes'));

//starting the server
app.listen(app.set('port'), () => {
    console.log('Server started on port', app.set('port'));
});