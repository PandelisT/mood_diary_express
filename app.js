const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

app.use(bodyParser.json());

//Import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

// DB connection
mongoose.connect(process.env.DB_CONNECTION, 
{ useNewUrlParser: true, useUnifiedTopology: true}, () =>
    console.log('Connected to DB') 
);


app.listen(3000);

