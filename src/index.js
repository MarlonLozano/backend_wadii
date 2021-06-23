const express = require('express');
const morgan = require('morgan');
const router = require('./routes');

//initializations
const app = express();


//middlewares
app.use(morgan('dev'));

//Routes
app.use(require('./routes/index'));

//Settings server
app.listen(3000);
console.log("Server runnig on port 3000");

