const mongoose = require('mongoose');

const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

BlogPost.find({}, (err, blogpost) => {
    console.log(err, blogpost)
})