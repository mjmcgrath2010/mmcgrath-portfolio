import mongoose from 'mongoose'

const Post = new mongoose.Schema({
    body: {
        type: String
    },
    description: {
        type: String,
    },
    slug: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: [true, 'Please provide a title for this post.'],
    },
})

export default mongoose.models.Post || mongoose.model('Post', Post)