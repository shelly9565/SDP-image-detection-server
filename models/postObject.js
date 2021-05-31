import mongoose from 'mongoose';

const postObjectSchema = mongoose.Schema({
    fullName: String,
    selectedFile: String,
    happyPercentage: Number,
    sadPercentage: Number,
    createdAt: {
        type: Date,
        default: new Date()
    }
});


const PostObject = mongoose.model('PostObject', postObjectSchema);
export default PostObject;

