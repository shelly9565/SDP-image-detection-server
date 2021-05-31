import mongoose from 'mongoose';
import PostObject from '../models/postObject.js';


export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostObject.find();
        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    console.log('inside create post object', req.body);
    const post = req.body;
    const newPost = new PostObject(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    try {
        const { id: _id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
        console.log('there is post id - controller');
        const post = req.body;
        console.log('post body:', post);

        const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
        res.status(201).json(updatedPost);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

        await PostMessage.findByIdAndRemove(id);

        res.status(201).json({ message: 'Post deleted succsessfully' });

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


