const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// Save express app as variable
const app = express();

// parse as json
app.use(bodyParser.json());

//Import routes
const journalRoute = require('./routes/journal');
app.use('/journal', journalRoute);

const registerRoute = require('./routes/user');
app.use('/user', registerRoute);

// DB connection
mongoose.connect(process.env.DB_CONNECTION, 
{ useNewUrlParser: true, useUnifiedTopology: true}, () =>
    console.log('Connected to DB') 
);

// listen on localhost:3000
app.listen(3000);

