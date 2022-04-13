const PostMessage = require('../models/postMessage');

const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

const createPost = async (req, res) => {
    const body = req.body;
    const newPost = PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

module.exports = {
    getPosts,
    createPost
}