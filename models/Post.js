import mongoose from 'mongoose'

const Post = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title for this post.'],
    },
    description: {
        type: String,
    }
})

export default mongoose.models.Pet || mongoose.model('Post', Post)