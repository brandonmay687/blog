const express = require('express');
const server = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const postRoutes = require('./routes/posts');

server.use(bodyParser.json({ limit: '30mb', extended: true }));
server.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
server.use(cors());

server.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb://localhost/my_database';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err.message)
    })

    // mongoose.set('useFindAndModify', false);